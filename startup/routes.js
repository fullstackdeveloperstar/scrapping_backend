/**
 * This is the main configuration route file to be run on start up of the server
 * This file defines all route trees to be use in the whole serever
 * All server endpoints must go in /api/v1 or any current version
 * Morgan package is enabled only on the developer local machine
 */

const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');

const error = require('../middlewares/error');
const routes = require('../routes/index');

const environment = process.env.ENVIRONMENT;

module.exports = function (app) {
    // To configure Cross-Origin Resource Sharing(CORS) mechanism on our server
    app.use(cors());
    // To help in securing our server by adding some HTTP headers
    app.use(helmet());

    // To enable morgan in development
    if (environment === 'DEV') app.use(morgan('dev'));

    // To parse incoming data for ease of access
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());

    // This is to define our API routes and versioning of it
    app.use('/api/v1', routes);

    // To get a response for /api
    app.use('/api', (req, res) => {
        return res.status(200).send('This is Leaf Server General API Endpoint');
    });

    // To get a response for our versioning => /api/v1
    app.use('/api/v1', (req, res) => {
        return res.status(200).send('This is Leaf Server General API Endpoint for V1');
    });

    // To get a response for /
    app.use('/', (req, res) => {
        res.status(200).send('This is Leaf Server');
    });

    // Generic page not found response
    app.use((req, res) => {
        return res.status(404).json({ status: false, message: 'Page not found' });
    });

    // This is a middleware to handle errors
    app.use(error);
};
