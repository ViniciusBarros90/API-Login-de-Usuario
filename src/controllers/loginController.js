// src/controllers/loginController.js
const { authenticate } = require('../services/loginService');

async function login(req, res) {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).json({ message: 'Username and password are required.' });
  }
  const user = authenticate(username, password);
  if (user) {
    return res.status(200).json({ message: 'Login successful', user });
  } else {
    return res.status(401).json({ message: 'Invalid credentials' });
  }
}

module.exports = { login };
