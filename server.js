const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const movies = require('./routes/movie.routes');

app.use(bodyParser.json());

// adding headers
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  next();
});

// registering routes
movies(app);

app.listen(8080);