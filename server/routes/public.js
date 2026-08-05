// ============ Rotas públicas (/api/public) ============
// Destinadas ao QR Code: permitem ver a ficha de UM colaborador
// sem exigir login (somente leitura, dados mínimos, sem assinaturas - LGPD).

const express = require('express');
const db = require('../db');

const router = express.Router();

// GET /api/public/employee/:id -> { employee, entregas }
router.get('/employee/:id', (req, res) => {
  const emp = db.getEmployee(req.params.id);
  if (!emp) return res.status(404).json({ error: 'Colaborador não encontrado' });
  const entregas = db.entregasByEmployee(emp.id).map(d => ({
    id: d.id, data: d.data, itens: d.itens,
    employeeName: d.employeeName, matricula: d.matricula,
    cargo: d.cargo, admissao: d.admissao
  }));
  res.json({ employee: emp, entregas });
});

module.exports = router;