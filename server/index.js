const express = require('express');
const app = express();
const mongoose = require('mongoose');

const usersRouter = require('./app/api/users/router');
const poemsRouter = require('./app/api/poems/router');

/**
 * Database connection
 */
const DB_SERVER = 'mongodb';
const DB_DOMAIN = 'localhost:27017';
const DB_NAME = 'poethub';
mongoose
    .connect(`${DB_SERVER}://${DB_DOMAIN}/${DB_NAME}`)
    .then((res) => {
        console.log('MongoDB connection succecced!');
    })
    .catch((err) => {
        console.log('MongoDB connection failed');
        // console.log(err);
        process.exit(1);
    });

/**
 * Express middlewares
 */
app.use(express.json());
app.use(express.urlencoded({extended: true}));
// app.use(express.static('/public'));

/**
 * Custom middlewares
 */

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