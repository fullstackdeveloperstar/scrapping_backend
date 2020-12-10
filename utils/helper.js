/**
 * This file helps us to write utility function to reduce code redundacy
 * Our expample is to capitalize the first Letter in a given word.
 * Usecase: lets say you store the first name in your DB as lowercase and you want to retrieve it and
 * capitalize the first letter
 */

const isRequired = (text) => {
    throw new Error(text + ' is required');
};

// This function helps Capitilizing the first letter of a word
const capitalize = (string = isRequired('text')) => {
    return string[0].toUpperCase() + string.slice(1);
};

module.exports = capitalize;
