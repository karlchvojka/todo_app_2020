// Library Imports
const mongoose = require('mongoose');

// Variable Declarations
const Schema = mongoose.Schema;

let Todo = new Schema({
  todo_title: {
    type: String
  },
  todo_description: {
    type: String
  },
  todo_dueDate: {
    type: Date
  },
  todo_completed: {
    type: Boolean
  }

}, { timestamps: true });

module.exports = mongoose.model('Todo', Todo);