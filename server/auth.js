// ============ Autenticação por usuário e papel ============
// Sessões em memória (token -> {userId, role, exp}). Login com limite de
// tentativas (rate-limit leve) para evitar força bruta.

const crypto = require('crypto');
const db = require('./db');
const { verifyPassword } = require('./crypto');

const TTL_MS = (parseInt(process.env.TOKEN_TTL_MIN, 10) || 480) * 60 * 1000;
const sessions = new Map(); // token -> { userId, role, exp }

// rate-limit simples por usuário+ip
const attempts = new Map(); // chave -> { count, lockUntil }

function authEnabled() { return true; }

function login(username, password, ip) {
  const key = 'login:' + (username || '').toLowerCase() + ':' + (ip || '');
  const att = attempts.get(key);
  const now = Date.now();
  if (att && att.lockUntil > now) {
    return { error: 'locked', until: att.lockUntil };
  }
  const user = username ? db.findUserByUsername(username) : null;
  if (!user || !verifyPassword(password || '', user.pass_hash)) {
    const a = attempts.get(key) || { count: 0, lockUntil: 0 };
    a.count += 1;
    if (a.count >= 5) { a.lockUntil = now + 5 * 60 * 1000; a.count = 0; }
    attempts.set(key, a);
    return { error: 'invalid' };
  }
  attempts.delete(key);
  const token = crypto.randomBytes(24).toString('hex');
  sessions.set(token, { userId: user.id, role: user.role, exp: now + TTL_MS });
  return { token, user: { id: user.id, username: user.username, name: user.name, role: user.role } };
}

function logout(token) { sessions.delete(token); }

function getSession(token) {
  const s = token && sessions.get(token);
  if (!s) return null;
  if (Date.now() > s.exp) { sessions.delete(token); return null; }
  return s;
}

// Middleware de autenticação + papéis.
function requireAuth(roles) {
  return (req, res, next) => {
    const auth = req.headers.authorization || '';
    const token = auth.startsWith('Bearer ') ? auth.slice(7) : '';
    const s = getSession(token);
    if (!s) return res.status(401).json({ error: 'Não autorizado' });
    req.user = { id: s.userId, role: s.role, token };
    if (roles && !roles.includes(s.role)) return res.status(403).json({ error: 'Sem permissão' });
    next();
  };
}

module.exports = { authEnabled, login, logout, getSession, requireAuth };