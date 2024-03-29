var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require("mongoose");
var indexRouter = require('./routes/index');
var studentsRouter = require('./routes/students');
var supervisorsRouter = require('./routes/supervisors');
var archiveRouter = require('./routes/archives');
var announcementRouter = require('./routes/coordinatorAnnouncement');
var freeTimeFormRouter = require('./routes/freeTime');
var templatesRouter = require('./routes/templates');
var ideaRouter = require('./routes/idea');
var signupController = require('./routes/signup');
var loginController = require('./routes/login');
var listController = require('./routes/doclist');
var groupController = require('./routes/groups');
var searchAPI = require('./routes/search');
var uploadArchiveAPI = require('./routes/uploadArchive');
var uploadTemplateAPI = require('./routes/uploadTemplate');
var uploadDocumentAPI = require('./routes/uploadDocument');
var downloadApi = require('./routes/download');

var app = express();
mongoose.connect("mongodb://localhost:27017/gradProjDB", {
    useCreateIndex: true, useNewUrlParser: true,useUnifiedTopology:true })
    .then(() => {
        /** ready to use. The `mongoose.connect()` promise resolves to undefined. */
        console.log('DB is Connected');
    }).catch(err => {
    console.log(
        "MongoDB connection error. Please make sure MongoDB is running. " + err
    );
});

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
  
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/students', studentsRouter);
app.use('/supervisors', supervisorsRouter);
app.use('/archives', archiveRouter);
app.use('/announcement', announcementRouter);
app.use('/freeTime', freeTimeFormRouter);
app.use('/idea', ideaRouter);
app.use('/templates', templatesRouter);
app.use('/search', searchAPI);
app.use('/uploadArchive', uploadArchiveAPI);
app.use('/uploadTemplate', uploadTemplateAPI);
app.use('/uploadDocument', uploadDocumentAPI);
app.use('/download', downloadApi);
app.use('/signup', signupController);
app.use('/login', loginController);
app.use( '/list', listController);
app.use('/group', groupController);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;
