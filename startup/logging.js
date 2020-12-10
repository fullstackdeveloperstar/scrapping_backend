const { log } = require('../config/winston');

/**
 * This file validates if all required env variables are present when starting up the server
 * It validates if the ENV file is configured with the correct required variables
 * ? DEVELOPER variable: is your name. This variable helps you by creating log files for you
 * ? ENVIRONMENT variable: is the environment you are working in. Choose wisely, most of the times you can use DEV
 * The created log files include info, error and exceptions files.
 */

module.exports = function () {
    const username = process.env.DEVELOPER;
    const environment = process.env.ENVIRONMENT;

    if (!environment || !username) log.error(new Error('Invalid credentials'));
};
