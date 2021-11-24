const express = require('express');
const controllers = require("./controllers");

const router = express.Router();

router.post('/orders', (req, res) => controllers.Order.create(request, response));

module.exports = router;
