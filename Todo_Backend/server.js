// Library Imports
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { default: mongoose, connect } = require('mongoose');

// Variable Declarations
const app = express();
const PORT  = 4000;

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://127.0.0.1:27017/todos', { useNewUrlParser: true });
const connection = mongoose.connection;

connection.once('open', () => {
  console.log("MongoDb database connection established Successfully.");
})

app.listen(PORT, () => {
  console.log("Server is running on Port: " + PORT);
});