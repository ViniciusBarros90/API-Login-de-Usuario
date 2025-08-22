// src/models/userModel.js

// Simulação de um banco de dados em memória
const users = [
  { id: 1, username: 'admin', password: 'admin123' },
  { id: 2, username: 'user', password: 'user123' }
];

function findUserByUsername(username) {
  return users.find(user => user.username === username);
}

module.exports = { findUserByUsername };
