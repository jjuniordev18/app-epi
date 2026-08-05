// ============ Sync e backup (/api) ============
const express = require('express');
const db = require('../db');
const auth = require('../auth');

const router = express.Router();

// GET /api/health (público)
router.get('/health', (req, res) => res.json({ ok: true, auth: auth.authEnabled() }));

// GET /api/sync -> snapshot completo para o frontend (autenticado)
router.get('/sync', auth.requireAuth(), (req, res) => res.json(db.getSync()));

// PUT /api/state -> merge (last-write-wins por updatedAt) do estado local do front
router.put('/state', auth.requireAuth(), (req, res) => {
  if (!req.body) return res.status(400).json({ error: 'Body inválido' });
  res.json(db.mergeState(req.body));
});

// GET /api/backup -> JSON para download
router.get('/backup', auth.requireAuth(['admin']), (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Content-Disposition', 'attachment; filename="backup_epi.json"');
  res.send(JSON.stringify(db.backup(), null, 2));
});

// POST /api/backup -> restaura um backup ({employees, epis, entregas})
router.post('/backup', auth.requireAuth(['admin']), (req, res) => {
  if (!req.body) return res.status(400).json({ error: 'Body inválido' });
  res.json(db.restore(req.body));
});

module.exports = router;