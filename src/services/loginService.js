// src/services/loginService.js
const { findUserByUsername } = require('../models/userModel');

function authenticate(username, password) {
  const user = findUserByUsername(username);
  if (user && user.password === password) {
    return { id: user.id, username: user.username };
  }
  return null;
}

module.exports = { authenticate };
