const express = require('express');
const mongoose = require('mongoose');

const app = express();

const mongoUrl = 'mongodb://localhost:27017/express-mongo';
mongoose.connect(mongoUrl);
mongoose.connection.on('connected', () => {
  console.log('Connected to mongo instance');
});
mongoose.connection.on('error', (err) => {
  console.error('Error connecting to mongo', err);
});

app.get('/', (req, res) => {
  res.send('Hi there!');
});

app.listen(3000, () => {
  console.log('Listening on port 3000');
});
