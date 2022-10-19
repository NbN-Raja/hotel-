var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cookieSession = require("cookie-session");

var loginRouter = require('./routes/login');
var registerRouter = require('./routes/register');
var adminRouter = require('./routes/index');
var superadminRouter = require('./routes/superadmin');
var superadminlogin = require('./routes/superadmin-login');
var adminlogin = require('./routes/admin-login');
var roombook = require('./routes/roombook');
var superadmindas = require('./routes/superadmindas');
var roomcategory = require('./routes/roomcategoryy');
var userhistory = require('./routes/userhistory');
var routeapi = require('./api/api');
const db= require('./model/db')

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/login', loginRouter);
app.use('/register', registerRouter);
app.use('/admin', adminRouter);
app.use('/superadmin', superadminRouter);
app.use('/superadminlogin', superadminlogin);
app.use('/adminlogin', adminlogin);
app.use('/roombook', roombook);
app.use('/superadmindas', superadmindas);
app.use('/roomcategory', roomcategory);
app.use('/userhistory', userhistory);
app.use('/loginapi',routeapi)
app.use('/categoryapi',require('./api/cat'))

// search by name 

app.use("/search",require('./routes/search'))

app.use(
  cookieSession({
    name: "bezkoder-session",
    secret: "COOKIE_SECRET", // should use as secret environment variable
    httpOnly: true
  })
);




app.listen(5000)

module.exports = app;
