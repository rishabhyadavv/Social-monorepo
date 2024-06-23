const express = require('express');
const passport = require('../../services/passportService');
const authController = require('../../controllers/auth/authController');

const router = express.Router();

router.get('/google', authController.login);
router.get('/google/callback', authController.callback);
router.get('/check', authController.checkAuth);
router.get('/logout', authController.logout);

module.exports = router;
