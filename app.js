/*
  Reference NPM Plugins
*/
var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var app = express();


/*
  Bootstrap our express app
*/
//app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

/*
  Static files path
*/
app.use(express.static(__dirname + '/public'));

/*
  Include all configurations scripts.
*/
var mysql  = require('./config/mysql');
//var oracle = require('./config/oracle');
var sql = require('./config/sql');

/*
  Include all Route Scripts.
  Input: A reference to this 'app' and the database
*/
require('./routes/index')(app);
require('./routes/mysqlRequests')(app, mysql);
require('./routes/sqlRequests')(app, sql);




module.exports = app;