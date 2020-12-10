/**
 * This is the error handling middleware
 * It is used by express package
 * It logs the errors in error log files then respond to the endpoint consumer a generic answer
 */

const { log } = require('../config/winston');

module.exports = (error, req, res, next) => {
    log.error(error.message, error);
    return res.status(500).json({
        status: true,
        message: 'Somthing went wrong. Please try again later',
    });
};
