/**
 * This is winston configuration file
 * Here you can add multiple channels to help with a proper error handling
 * You will add a slack channel to get live critical error you can trigger in your controllers or anywhere/anytime you want
 * You can add also a DB channel to log errors in a DB Table
 * By default, this code creates a log files for a developer accessing the server and can add more channels later on
 * ! Make sure you declared ENVIRONMENT and DEVELOPER variable before running your server
 */

const winston = require('winston');

const username = process.env.DEVELOPER;
const environment = process.env.ENVIRONMENT;

if (!environment) throw new Error('no environment found');

// * Log all server activities file
const log = winston.loggers.add('log-server', {
    format: winston.format.combine(
        winston.format.label({ label: `${username} Logger` }),
        winston.format.timestamp(),
        winston.format.json()
    ),
    transports: [
        new winston.transports.Console({
            level: 'silly',
            format: winston.format.combine(
                winston.format.colorize({ all: true }),
                winston.format.simple()
            ),
            handleExceptions: true,
        }),
        new winston.transports.File({
            level: 'error',
            filename: `logs/${username}-errorfile.log`,
        }),
        new winston.transports.File({
            level: 'info',
            filename: `logs/${username}-infofile.log`,
        }),
    ],
    exceptionHandlers: [
        new winston.transports.File({
            level: 'silly',
            filename: 'logs/exceptions.log',
            handleExceptions: true,
        }),
    ],
});

module.exports = { log };
