const express = require('express');
const auth = require('../auth');

const router = express.Router();

router.post('/login', (req, res) => {
  const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress || '';
  const r = auth.login(req.body && req.body.username, req.body && req.body.password, ip);
  if (r.error === 'locked') return res.status(429).json({ error: 'Muitas tentativas. Aguarde alguns minutos.' });
  if (r.error === 'invalid') return res.status(401).json({ error: 'Usuário ou senha incorretos' });
  res.json(r);
});

router.post('/logout', auth.requireAuth(), (req, res) => { auth.logout(req.user.token); res.json({ ok: true }); });

module.exports = router;