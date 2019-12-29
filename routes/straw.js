const express = require('express');
const router = express.Router();
const strawController = require('../controllers/straw')

router.get('', strawController.getStraws)

router.get('/put', strawController.putStraw)

module.exports = router;