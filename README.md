This is a **Leaf Node JS Project Template** Repository.

This project is to help you start, understand all our project structure.

[Check out our website](https://leafglobalfintech.com)

# Get Started

This project includes:

-   Dummy Test Endpoint

# Prerequisites

-   Make sure you have [Node JS](https://nodejs.org) installed.

-   Create an env file with the required 3 variables **_DEVELOPER_**, **_ENVIRONMENT_**, and **_PORT_**

# Installing

-   In the terminal type `npm install` to install all required packages

# Running

-   To run this server simply navigate your your project folder in your terminal then type `node index.js`
-   If you want to run in the development, simply type `npm run start:dev`

# Breakdown

-   This project consists of

    -   `index.js file`: To start the server
    -   `app.js file`: To load all needed files and configurations
    -   `startup folder`: contains all required configurations to start the server
    -   `routes folder`: contains all routing structure, authentication, validations and sanitazation, controllers middlewares
    -   `controllers folder`: contains all logic behind all endpoints
    -   `models folder`: contains models structure to be reflected in the database
    -   `data folder`: contains all files needed in the project
    -   `middleware folder`: contains all middleware files such as authentication logic, error handling and more
    -   `services folder`: contains some reusable functionalities and integraions
    -   `utils folder`: contains helpers files such as encryption logic, token generations, string manipulations and more
    -   `validations folder`: contains validation implementation middleware to be added in the routes folder when definign routes
    -   `views folder`: contains rendering files such as html, css, js. We encourage using Node JS templating engines such as [ejs](https://ejs.co/) or [pug](https://pugjs.org/api/getting-started.html)
    -   `env file`: contains all credentials to the server

For more information, you can view inline comment on each file.

# ENV File

Our server env file is like any other but requires 3 main variables:

-   `PORT`: for port number such as 3030
-   `DEVELOPER`: this is the developer name to run the server
-   `ENVIRONMENT`: this is the environment the developer is running the server under. We have 3 main environments:
    -   `DEV`: used when running in your local server(local machine)
    -   `DEVHEROKU`: used when running on heroku or any server we use
    -   `PROD`: used on a production server

# Packages

At Leaf, we value **_code quality_**, **_code effiency_** and **_coding standard_** of a project. In that concept, we know there are a lot of packages out there, that's why we strongly recommend using **popular, secure with less issues** packages.
Here are some of the packages we use, like and strongly recommend:

```
express, express-validator, body-parser, winston, cors, dotenv, helmet, morgan, mongoose, stellar-sdk, nodemon, jest and more
```

# Commit Message Structure

-   If you are committing a feature, add `feat:` prefix then add description of the message.

```
Example: feat: added readme file
```

-   If you are committing a fix, add `fix:` prefix then add description of the message

```
Example: fix: fixed typo in readme file
```

-   If you are committing an improvement of an existing code, add `impr:` prefix then add description of the message

```
Example: impr: added validating to if an id is a mongodb id on top of checking if the field is empty
```

-   If you are committing a refactor of an existing code, add `refact:` prefix then add description of the message

```
Example: refact: reduced code for checking for null values on array
```

-   **Tip**: You can combine commit prefixes like:

```
Example: feat&fix: added readme file, fixed typo in readme file
```
