const express = require('express');
const router = express.Router();
const rabbitController = require('../controllers/rabbit.controller');

// Define routes
router.post('/publish', rabbitController.publishMessage);

module.exports = router;
