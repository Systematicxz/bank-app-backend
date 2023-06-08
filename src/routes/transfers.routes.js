const transfersController = require('../controllers/transfers.controller');
const express = require('express');

const router = express.Router();

router.post('/', transfersController.transferAmount);

module.exports = router;
