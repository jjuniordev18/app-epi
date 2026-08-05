// ============ Hash de senhas (scrypt) ============
// Funções puras de hash/verificação de senhas, sem dependência de db.

const crypto = require('crypto');

function hashPassword(pw, salt) {
  return crypto.scryptSync(pw, salt, 64).toString('hex');
}

function verifyPassword(pw, stored) {
  const [salt, hash] = stored.split(':');
  return hashPassword(pw, salt) === hash;
}

module.exports = { hashPassword, verifyPassword };
