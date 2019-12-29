const express = require('express');
const router = express.Router();
const fluteController = require('../controllers/flute')

router.get('', fluteController.getFlutes) 


router.get('/put', fluteController.putFlute)


module.exports = router