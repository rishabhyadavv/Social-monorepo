const express = require('express');
const path = require('path');
const checkLoggedIn = require('../middlewares/authMiddleware');

const router = express.Router();

router.get('/secret', checkLoggedIn, (req, res) => {
  return res.send('Your personal secret value is 42!');
});

router.get('/failure', (req, res) => {
  return res.send('Failed to log in!');
});

router.use(express.static(path.join(__dirname, '..', 'public')));

router.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});

module.exports = router;
