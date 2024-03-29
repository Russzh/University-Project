﻿//Подключение 
const express = require('express');
const bodyParser = require('body-parser');
var path = require('path');
// Создание express(подключение)
const app = express();

// Парсинг /x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// Парсинг json
app.use(bodyParser.json());

// Подключение БД js и модуля 
const dbConfig = require('./config/database.js');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
app.use(express.static(path.join(__dirname, 'public')));
// Подключение к бд
mongoose.connect(dbConfig.url, {
    useNewUrlParser: true
}).then(() => {
    console.log("Successfully connected to the database");
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});

// Установление рута 
app.get('/', (req, res) => {
    res.sendFile( 'index.html', { root: path.join(__dirname, './public') });
    //res.sendFile('index.html');
});
//require('module-alias/register');
require('./entrant/entrant_routes')(app);
//require('module-alias/register');
require('./profile/profile_routes')(app);
//import * as routes from './/.routes.js';
//слушатель

app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});