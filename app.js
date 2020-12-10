/**
 * This file is to initiate logging, routes and db files as the server starts running
 */

const app = require('express')();

require('./startup/logging')();
require('./startup/db')(app);
require('./startup/routes')(app);


module.exports = app;
