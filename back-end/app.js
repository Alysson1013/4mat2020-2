var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

const db = require('./config/database')
//Versão sem senha
//db(mongodb+srv://alysson:<password>@cluster0.z7gyu.gcp.mongodb.net/<dbname>?retryWrites=true&w=majority)

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

const teste = require("./routes/teste")

app.use("/teste", teste)

module.exports = app;
