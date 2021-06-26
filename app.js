const path = require('path');
const express = require('express');

const usersRouter = require('./routes/users');
const teachersRouter = require('./routes/teachers');
const subjectsRouter = require('./routes/subjects');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/students', usersRouter);
app.use('/teachers', teachersRouter);
app.use('/subjects', subjectsRouter);

module.exports = app;
