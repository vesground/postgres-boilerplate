const express = require('express');
const controllers = require("./controllers");

const router = express.Router();

router.get('/', (req, res) => controllers.home(request, response));

module.exports = router;
