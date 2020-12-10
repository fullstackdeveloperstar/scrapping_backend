/**
 * This is a service to help create reusable code
 * This example is to search a user by name
 * Instead of writing this query everywhere in your code which result in some redundancies and other stuff
 * You can just call it anywhere you want in your code
 * We use an error handling wrapper package which helps us write straight forward, clean code
 * Wherever an async error occurs through our project, the package handles it for use and
 * communicates it to the error handling middleware to take care of the rest
 * For more on express-async-errors: https://www.npmjs.com/package/express-async-errors
 */

const User = require('../models/user');

// Function to query in the User Table with the help of Mongoose, we can just write a helper function to perfom a query for us
module.exports = async (name) => await User.findOne({ name: name });
