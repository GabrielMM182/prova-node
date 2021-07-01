/* Imports */
var express = require('express'),
    consign = require('consign');
    path = require('path');

/* Configure express */
var app = express();

consign()
    .include('config/database.js')
    .then('app/routes')
    .then('app/controllers')
    .into(app);

module.exports = app;
