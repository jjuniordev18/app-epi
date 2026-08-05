const express = require('express');
const db = require('../db');
const auth = require('../auth');
const ExcelJS = require('exceljs');

const router = express.Router();
router.use(auth.requireAuth());

// GET /api/reports?from=&to=&epiId=&employeeId=
router.get('/', (req, res) => {
  const { from, to, epiId, employeeId } = req.query;
  res.json(db.report({ from, to, epiId, employeeId }));
});

// GET /api/reports/export?format=csv|xlsx&from=&to=&employeeId=
router.get('/export', async (req, res) => {
  const { format, from, to, employeeId } = req.query;
  const r = db.report({ from, to, employeeId });
  if (format === 'csv') {
    res.setHeader('Content-Type', 'text/csv; charset=utf-8');
    res.setHeader('Content-Disposition', 'attachment; filename="relatorio_epi.csv"');
    return res.send(toCSV(r));
  }
  const buf = await toXLSX(r);
  res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
  res.setHeader('Content-Disposition', 'attachment; filename="relatorio_epi.xlsx"');
  res.send(buf);
});

function toCSV(r) {
  const lines = [['EPI', 'CA', 'Quantidade entregue', 'Colaboradores', 'Última entrega']];
  r.byEpi.forEach(x => lines.push([x.nome, x.ca || '', x.qty, x.empCount, x.last]));
  lines.push([]);
  lines.push(['Colaborador', 'Matrícula', 'Fichas', 'Itens entregues']);
  r.byEmp.forEach(x => lines.push([x.employeeName, x.matricula || '', x.count, x.qty]));
  lines.push([]);
  lines.push(['Vencimento de CA em até 90 dias']);
  r.caProximos.forEach(x => lines.push([x.nome, x.ca, x.caVal, x.dias + ' dias']));
  lines.push([]);
  lines.push(['Estoque baixo']);
  r.baixoEstoque.forEach(x => lines.push([x.nome, x.ca, 'Total: ' + x.total, 'Mínimo: ' + x.estoqueMin]));
  return lines.map(l => l.map(c => `"${String(c == null ? '' : c).replace(/"/g, '""')}"`).join(';')).join('\r\n');
}

async function toXLSX(r) {
  const wb = new ExcelJS.Workbook();
  wb.creator = 'App EPI (SONDA)';

  const ws1 = wb.addWorksheet('Por EPI');
  ws1.columns = [{ header: 'EPI', key: 'nome', width: 30 }, { header: 'CA', key: 'ca', width: 15 }, { header: 'Quantidade', key: 'qty', width: 15 }, { header: 'Colaboradores', key: 'empCount', width: 15 }, { header: 'Última entrega', key: 'last', width: 22 }];
  ws1.getRow(1).font = { bold: true };
  r.byEpi.forEach(x => ws1.addRow(x));

  const ws2 = wb.addWorksheet('Por Colaborador');
  ws2.columns = [{ header: 'Colaborador', key: 'employeeName', width: 35 }, { header: 'Matrícula', key: 'matricula', width: 15 }, { header: 'Fichas', key: 'count', width: 12 }, { header: 'Itens', key: 'qty', width: 12 }];
  ws2.getRow(1).font = { bold: true };
  r.byEmp.forEach(x => ws2.addRow(x));

  const ws3 = wb.addWorksheet('Vencimentos CA');
  ws3.columns = [{ header: 'EPI', key: 'nome', width: 30 }, { header: 'CA', key: 'ca', width: 15 }, { header: 'Validade', key: 'caVal', width: 15 }, { header: 'Dias restantes', key: 'dias', width: 15 }, { header: 'Situação', key: 'situacao', width: 15 }];
  ws3.getRow(1).font = { bold: true };
  r.caProximos.forEach(x => ws3.addRow({ ...x, situacao: x.vencido ? 'VENCIDO' : 'OK' }));

  const ws4 = wb.addWorksheet('Estoque Baixo');
  ws4.columns = [{ header: 'EPI', key: 'nome', width: 30 }, { header: 'CA', key: 'ca', width: 15 }, { header: 'Total', key: 'total', width: 12 }, { header: 'Mínimo', key: 'estoqueMin', width: 12 }];
  ws4.getRow(1).font = { bold: true };
  r.baixoEstoque.forEach(x => ws4.addRow(x));

  const buf = await wb.xlsx.writeBuffer();
  return Buffer.from(buf);
}

module.exports = router;