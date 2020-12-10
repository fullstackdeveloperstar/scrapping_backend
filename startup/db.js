/**
 * This file helps to manage environments
 * You can set to connect to DB depending on the specified environment in your env file
 * ! Make sure you declared ENVIRONMENT variable before running your server
 * ? We use 3 environments for now:
 * ? DEV: if you are using your local machine and DEV DB
 * ? DEVHEROKU: if you are using heroku and DEV DB
 * ? PROD: if you are using the production and PROD DB
 */

const {
    log
} = require('../config/winston');

var mysql = require("mysql");

module.exports = function (app) {

    app.use(function (req, res, next) {
        try {
            res.locals.connection = mysql.createConnection({
                host: 'localhost',
                user: 'root',
                password: 'password',
                database: 'scrapping'
            });


            res.locals.connection.connect();
            console.log("DB connected");
        } catch (error) {
            console.log(error.toString());
        }
        next();
    });
};