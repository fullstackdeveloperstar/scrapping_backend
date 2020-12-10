/**
 * This is a sample validation file middleware for an endpoint
 * Example: /api/v1/test/ ....
 * You can check more validations check at https://www.npmjs.com/package/express-validator
 */

const { check, validationResult } = require('express-validator');

/**
 * This is the validation error handling middleware
 * This middleware lists all errors found in the submitted data on an endpoint
 */
exports.handleValidation = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty())
        return res.status(422).json({
            status: false,
            message: 'Validation error',
            errors: errors.array(),
        });
    next();
};

/**
 * This is the validation middleware which sanitize and validate data coming through an endpoint
 */
exports.checkAccessTestEndpoint = [
    check('email', 'Default message like: Email is invalid')
        .notEmpty()
        .isString()
        .bail()
        .trim()
        .normalizeEmail()
        .isEmail()
        .bail()
        .escape(),
];
