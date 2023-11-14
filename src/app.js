const express = require('express');
require('dotanv').config();
const app = express();
app.set('port', process.env.PORT || 3333);
module.exports = app;
