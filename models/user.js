/**
 * This file is just for representing what goes into the model folder.
 * We are defining a model and with the help of mongoose package it is going to be reflected in our DB
 * as a new Table.
 * There are several function functions and queries we can use already built in this mongoose package
 * like required, type, lowercase, unique and many more
 * For more about mongoose: https://mongoosejs.com/docs/guide.html
 * For more about Object Document Mapper and Object Relational Mapper: https://dev.to/anudeepreddy/what-is-the-difference-between-an-odm-and-an-orm-2e7a/comments
 */

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Defining our model to be used in our code
const User = new Schema(
    {
        // These are fields with its properties
        name: { type: String, required: true, lowercase: true },
        email: { type: String, required: true, unique: true },
    },
    /**
     * This is a configuration to add a timestamp to a new record
     * It automatically creates 2 fields called createdAt and updatedAt
     */
    { timestamps: true }
);

module.exports = mongoose.model('User', User);
