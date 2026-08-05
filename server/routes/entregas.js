const express = require('express');
const db = require('../db');
const auth = require('../auth');

const router = express.Router();

// Lista entregas: ?employeeId=<id> para filtrar por colaborador
router.get('/', auth.requireAuth(), (req, res) => {
  const { employeeId } = req.query;
  if (employeeId) return res.json(db.entregasByEmployee(Number(employeeId)));
  res.json(db.listEntregas());
});

// Detalhe de uma ficha (com assinaturas) - autenticado
router.get('/:id', auth.requireAuth(), (req, res) => {
  const d = db.getEntrega(req.params.id);
  if (!d) return res.status(404).json({ error: 'Ficha não encontrada' });
  res.json(d);
});

// Cria entrega: valida e baixa estoque atomicamente
router.post('/', auth.requireAuth(), (req, res) => {
  const d = req.body || {};
  if (!d.employeeId || !d.data || !Array.isArray(d.itens)) {
    return res.status(400).json({ error: 'employeeId, data e itens obrigatórios' });
  }
  const emp = db.getEmployee(d.employeeId);
  if (!emp) return res.status(404).json({ error: 'Colaborador não encontrado' });
  const delivery = {
    ...d,
    employeeName: d.employeeName || emp.nome,
    matricula: d.matricula || emp.matricula,
    cargo: d.cargo || emp.cargo,
    admissao: d.admissao || emp.admissao
  };
  const r = db.createEntrega(delivery, req.user.id);
  if (r.error === 'estoque_insuficiente') {
    return res.status(409).json({ error: 'Estoque insuficiente para: ' + r.epi, epi: r.epi });
  }
  res.status(201).json(r);
});

// Exclui ficha e devolve os itens ao estoque
router.delete('/:id', auth.requireAuth(['admin']), (req, res) => {
  const d = db.getEntrega(req.params.id);
  if (!d) return res.status(404).json({ error: 'Ficha não encontrada' });
  db.deleteEntrega(d);
  res.json({ ok: true });
});

module.exports = router;