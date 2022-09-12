const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyParser = require('body-parser');
require('dotenv').config();
const {logger} = require('./middleware/logEvents')

// import routes
const registerRoute = require('./routes/register');
const authRoute = require('./routes/auth');
const employeeRoute = require('./routes/employee');

const connectDB = require('./config/dbConnection');
connectDB();

const DB = mongoose.connection;

const server = express();

DB.once('open', () => {
    const PORT = process.env.PORT || 3500;
    server.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    })
});

server.use(logger);

server.use(morgan('dev'));
server.use(bodyParser.urlencoded({extended: true}));
server.use(bodyParser.json());

// To access public files
server.use('/uploads', express.static('uploads'))

server.use('/user', registerRoute);
server.use('/user', authRoute);
server.use('/employee', employeeRoute);