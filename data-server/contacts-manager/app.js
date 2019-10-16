const createError = require('http-errors');
const express = require('express');
const cors = require('cors');
const path = require('path');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const contactsRouter = require('./routes/contacts');
const usersRouter = require('./routes/users');
const authMiddleware = require('./middlewares/auth');
const errorMiddleware = require('./middlewares/error');

const config = require('./config');
const mongoose = require('mongoose');
const userController = require('./controllers/userController');
const jwt = require('express-jwt');

// Database
mongoose.connect(config.db, {
  useNewUrlParser: true,
  useCreateIndex: true
})

const db = mongoose.connection;
// attach listeners to the db connection
db.on('error', console.error)

db.once('open', function() {
  console.log(`We're connected!`);
})

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// to allow server 3000:
let corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200
}

// middlewares:
app.use(cors(corsOptions));
app.use(logger('dev'));
app.use(express.json());  //  'Content-Type: application/json
app.use(express.urlencoded({ extended: false })); // content-type: application/x-www-form-urlencoded
app.use(express.static(path.join(__dirname, 'public'))); // to serve static content images or stylesheets

app.use('/', indexRouter);

app.post('/signup', userController.signupUser);
app.post('/login', userController.loginUser);

app.use(jwt({secret: config.secret}));

//basic auth custom middleware:
// app.use('/users', authMiddleware.basicAuth);
// app.use('/contacts', authMiddleware.basicAuth);

app.use('/contacts', contactsRouter);
app.use('/users', usersRouter);

// error handler
app.use(errorMiddleware.handler);

module.exports = app;
