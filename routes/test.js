/**
 * This file handles all routes for api/v1/test
 * It also handles validations of all kinds using express-validator package by importing its file from validation folder
 * Navigator to the validation folder to see what happens
 * It handles authentication if needed to access and endpoint in here
 * It connects a specific controller that handles all routes logic
 */

const express = require('express');
const router = express.Router();

// We are requiring/importing a controller file that holds the logic of an endpoint
const testController = require('../controllers/test');

// We are requiring/importing a validation file that holds the validation and sanitization of an endpoint
const validations = require('../validations/test');

// We are defining an endpoint with their access point and all required middlewares such as a controller, validations and validation handlers
router.use(
    '/',
    // validations.checkAccessTestEndpoint,
    // validations.handleValidation,
    testController.testEndpoint
);

module.exports = router;
