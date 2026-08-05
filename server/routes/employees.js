const express = require('express');
const db = require('../db');
const auth = require('../auth');

const router = express.Router();
router.use(auth.requireAuth(['admin']));

router.get('/', (req, res) => res.json(db.listEmployees()));

router.post('/', (req, res) => {
  const d = req.body || {};
  if (!d.nome || !d.matricula) return res.status(400).json({ error: 'Nome e matrícula obrigatórios' });
  if (db.listEmployees().find(e => e.matricula === d.matricula)) return res.status(409).json({ error: 'Matrícula já cadastrada' });
  res.status(201).json(db.createEmployee(d));
});

router.put('/:id', (req, res) => {
  const d = req.body || {};
  if (!d.nome || !d.matricula) return res.status(400).json({ error: 'Nome e matrícula obrigatórios' });
  const dup = db.listEmployees().find(e => e.matricula === d.matricula && Number(e.id) !== Number(req.params.id));
  if (dup) return res.status(409).json({ error: 'Matrícula já cadastrada' });
  const r = db.updateEmployee(req.params.id, d, req.body.baseUpdatedAt);
  if (r.error === 'not_found') return res.status(404).json({ error: 'Colaborador não encontrado' });
  if (r.error === 'conflict') return res.status(409).json({ error: 'Registro alterado por outro usuário', current: r.current });
  res.json(r);
});

router.delete('/:id', (req, res) => { db.deleteEmployee(req.params.id); res.json({ ok: true }); });

module.exports = router;