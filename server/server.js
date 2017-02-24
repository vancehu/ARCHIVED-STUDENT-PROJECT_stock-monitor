const express = require('express');
const path = require('path');
const logger = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors')

const routes = require('./routes');

const db = require('./lib/db');
db.init();

const app = express();
if (!process.env.NO_STATIC) {
    app.use(express.static('../browser/dist'))
}
app.use(logger('dev'));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', routes);

app.listen(process.env.SERVER_PORT || 3000)

module.exports = app;
