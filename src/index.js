const express = require('express');
const routes = require('./routes');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.json({ type: 'application/json' }));

app.use(routes);
// app.use('/api/', productRoute);

module.exports = app;