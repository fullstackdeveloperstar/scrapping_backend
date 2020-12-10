/**
 * This is the /api/v1 index file
 * It contains all routes that require /api/v1
 * As the project grows, we add on new routes responsible to handle new logic
 */

const express = require('express');
const router = express.Router();

// We are requiring/importing a new routing file
const testRoutes = require('./test');

// Add a generic name of the new API
router.use('/scrapping', testRoutes);

module.exports = router;
