const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const path = require('path');
const logger = require('morgan');
const PORT = process.env.PORT || 3000;

// Require Routers
const indexRouter = require('./routes/index');
const tradesRouter = require('./routes/trades');

// Setting view engine
app.set('view engine', 'pug');
app.set('views', __dirname + '/views');
app.use(bodyParser.urlencoded({ limit: '10mb', extended: false }) );
app.use(express.static(path.join(__dirname, 'public')));
app.use(logger('dev'));

// Set Routers relative path
app.use('/', indexRouter);
app.use('/trades', tradesRouter);

// Listen to port
app.listen(PORT, console.log('Server is running on port ' + PORT));