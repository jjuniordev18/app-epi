const express = require('express');
const db = require('../db');
const auth = require('../auth');

const router = express.Router();
router.use(auth.requireAuth(['admin']));

router.get('/', (req, res) => res.json(db.listEpis()));

router.post('/', (req, res) => {
  const d = req.body || {};
  if (!d.nome || !d.ca) return res.status(400).json({ error: 'Nome e CA obrigatórios' });
  if (db.listEpis().find(p => String(p.ca) === String(d.ca))) return res.status(409).json({ error: 'CA já cadastrado' });
  res.status(201).json(db.createEpi(d));
});

router.put('/:id', (req, res) => {
  const d = req.body || {};
  if (!d.nome || !d.ca) return res.status(400).json({ error: 'Nome e CA obrigatórios' });
  const dup = db.listEpis().find(p => String(p.ca) === String(d.ca) && Number(p.id) !== Number(req.params.id));
  if (dup) return res.status(409).json({ error: 'CA já cadastrado' });
  const r = db.updateEpi(req.params.id, d, req.body.baseUpdatedAt);
  if (r.error === 'not_found') return res.status(404).json({ error: 'EPI não encontrado' });
  if (r.error === 'conflict') return res.status(409).json({ error: 'Registro alterado por outro usuário', current: r.current });
  res.json(r);
});

router.delete('/:id', (req, res) => { db.deleteEpi(req.params.id); res.json({ ok: true }); });

module.exports = router;