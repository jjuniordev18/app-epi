// ============ Servidor do App de EPI ============
// Serve o index.html (front atual) e expõe a API REST.
//
// Como rodar:
//   cd server
//   npm install
//   cp .env.example .env   (defina ADMIN_PASSWORD)
//   npm start

require('dotenv').config();
const path = require('path');
const express = require('express');
const cors = require('cors');
const db = require('./db');
const backup = require('./backup');

const PORT = parseInt(process.env.PORT, 10) || 3000;
const ALLOWED_ORIGIN = process.env.ALLOWED_ORIGIN || 'http://localhost:' + PORT;

db.init();
backup.start();

const app = express();
app.use(cors({ origin: ALLOWED_ORIGIN }));
app.use(express.json({ limit: '1mb' }));

// API
app.use('/api', require('./routes/api'));
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/employees', require('./routes/employees'));
app.use('/api/epis', require('./routes/epis'));
app.use('/api/entregas', require('./routes/entregas'));
app.use('/api/reports', require('./routes/reports'));
app.use('/api/public', require('./routes/public'));

// Front (arquivos estáticos da raiz do projeto)
app.use(express.static(path.join(__dirname, '..')));

// Rotas não encontradas na API
app.use('/api', (req, res) => res.status(404).json({ error: 'Rota não encontrada' }));

// Tratamento de erros (sempre JSON)
app.use((err, req, res, _next) => {
  console.error('[erro]', err.message);
  if (err.estoque_insuficiente) res.status(409).json({ error: 'Estoque insuficiente' });
  else res.status(500).json({ error: 'Erro interno' });
});

app.listen(PORT, () => {
  console.log('==============================================');
  console.log('  App EPI · servidor rodando');
  console.log('  Acesso: http://localhost:' + PORT);
  console.log('==============================================');
});
