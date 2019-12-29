const express = require('express');
const router = express.Router();
const bookController = require('../controllers/book')

router.get('', bookController.getBooks)


router.get('/put', bookController.putBook)


module.exports = router