// Library Imports
require('dotenv').config()

const express = require('express');
const mongoose = require('mongoose');

// Local Imports
const routes = require('./routes/routes');

// Variable Imports
const mongoString = process.env.DATABASE_URL;
const mongoPort = process.env.PORT;

mongoose.connect(mongoString, { useNewUrlParser: true});
const database = mongoose.connection;

database.on('error', (error) => {
  console.log(error)
})

database.once('connected', () => {
  console.log('Database Connected');
})

const app = express();

app.use(express.json());

app.use('/api/todos', routes);

app.listen(mongoPort, () => {
  console.log(`MongoDB database connection establised succeessfully.`)
})