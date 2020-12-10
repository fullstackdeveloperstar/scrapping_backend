/**
 * This is the main server file
 * It initiates the error handling on all levels
 * It initiates async error package to handle all async error by default by accessing the error middleware
 */

require('dotenv').config();
require('express-async-errors');

const app = require('./app');
const { log } = require('./config/winston');

process.on('uncaughtException', (error) => {
    log.exceptions.handle(error.message, error);
    process.exit(1);
});

process.on('unhandledRejection', (error) => {
    throw error;
});

const PORT = process.env.PORT || 3030;

app.listen(PORT, () => log.debug(`Listening on port ${PORT}`));
