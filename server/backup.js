// ============ Backup automático ============
// Gera um backup JSON diário em data/backups/ e mantém apenas os N mais
// recentes (retenção). Pode ser disparado manualmente ou por intervalo.

const fs = require('fs');
const path = require('path');
const db = require('./db');

const BACKUP_DIR = path.join(__dirname, 'data', 'backups');
const RETENTION = parseInt(process.env.BACKUP_RETENTION, 10) || 10;
const INTERVAL_MS = (parseInt(process.env.BACKUP_INTERVAL_MIN, 10) || 60 * 24) * 60 * 1000;

let timer = null;

function stamp() {
  const d = new Date();
  const p = n => String(n).padStart(2, '0');
  return `${d.getFullYear()}-${p(d.getMonth() + 1)}-${p(d.getDate())}-${p(d.getHours())}${p(d.getMinutes())}`;
}

function createBackup() {
  if (!fs.existsSync(BACKUP_DIR)) fs.mkdirSync(BACKUP_DIR, { recursive: true });
  const file = path.join(BACKUP_DIR, `backup-${stamp()}.json`);
  fs.writeFileSync(file, JSON.stringify(db.backup(), null, 2));
  prune();
  return file;
}

function prune() {
  const files = fs.readdirSync(BACKUP_DIR).filter(f => f.startsWith('backup-') && f.endsWith('.json'))
    .sort(); // nome com data => ordem cronológica
  while (files.length > RETENTION) {
    fs.unlinkSync(path.join(BACKUP_DIR, files.shift()));
  }
}

function start() {
  if (timer) return;
  timer = setInterval(createBackup, INTERVAL_MS);
  timer.unref();
  // backup na inicialização
  try { createBackup(); } catch (err) { console.error('[backup] erro no backup inicial:', err.message); }
}

function stop() { if (timer) { clearInterval(timer); timer = null; } }

module.exports = { createBackup, start, stop, BACKUP_DIR };