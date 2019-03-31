const express = require('express');
const app = express();
const mongoose = require('mongoose');

const usersRouter = require('./app/api/users/router');
const poemsRouter = require('./app/api/poems/router');

/**
 * Database connection
 */
const DB_DOMAIN = 'mongodb';
const DB_HOST = 'localhost';
const DB_PORT = '27017';
const DB_NAME = 'poethub';
mongoose
    .connect(`${DB_DOMAIN}://${DB_HOST}:${DB_PORT}/${DB_NAME}`)
    .then((res) => {
        console.log('Connected to MongoDB...');
    })
    .catch((err) => {
        console.log('Could not connect to MongoDB...');
        process.exit(1);
    });

/**
 * Express middlewares
 */
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(__dirname+ '/public'));

/**
 * APIs router
 */
app.use('/api/users', usersRouter);
app.use('/api/poems', poemsRouter);

/**
 * Request error handler
 */
app.use((err, req, res, next) => {
    console.log('Error', err);
    res.status(404).end();
});

/**
 * Server listen at port 3000
 */
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});