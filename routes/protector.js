const express = require('express');
const router = express.Router();
const protectorController = require('../controllers/protector')

router.get('', protectorController.getProtectors);

router.get('/put', protectorController.putProtector)

module.exports = router;