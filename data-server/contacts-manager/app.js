const createError = require('http-errors');
const express = require('express');
const cors = require('cors')
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const contactsRouter = require('./routes/contacts');
const usersRouter = require('./routes/users');
const authMiddleware = require('./middlewares/auth');
const errorMiddleware = require('./middlewares/error');

const config = require('./config');
const mongoose = require('mongoose');

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

// let corsOptions = {
//   origin: 'http://localhost:4000',
//   optionsSuccessStatus: 500
// }

// middlewares:
// app.use(cors(corsOptions));
app.use(logger('dev'));
app.use(express.json());  //  'Content-Type: application/json
app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public'))); // to serve static content images or stylesheets

app.use('/', indexRouter);

//basic auth custom middleware:
app.use('/users', authMiddleware.basicAuth);
app.use('/contacts', authMiddleware.basicAuth);

app.use('/contacts', contactsRouter);
app.use('/users', usersRouter);

app.use(errorMiddleware.handler);

module.exports = app;
