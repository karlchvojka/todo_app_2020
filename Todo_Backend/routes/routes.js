// Library Imports
const express = require('express');
const Todo = require('../models/todo.model');
const router = express.Router();

/**
 * Post Method
 */
router.post('/post', async (req, res) => {
  const data = new Todo({
      todo_title: req.body.todo_title,
      todo_description: req.body.todo_description,
      todo_dueDate: req.body.todo_dueDate,
      todo_completed: req.body.todo_completed,
  })

  try {
      const dataToSave = await data.save();
      res.status(200).json(dataToSave)
  }
  catch (error) {
      res.status(400).json({ message: error.message })
  }
})

/**
 * Get All Method
 */
router.get('/getAll', async (req, res) => {
  try {
      const data = await Todo.find();
      res.json(data)
  }
  catch (error) {
      res.status(500).json({ message: error.message })
  }
})

/**
 * Get by ID Method
 */
router.get('/getOne/:id', async (req, res) => {
  try {
      const data = await Todo.findById(req.params.id);
      res.json(data)
  }
  catch (error) {
      res.status(500).json({ message: error.message })
  }
})

/**
 * Update by ID Method
 */
router.patch('/update/:id', async (req, res) => {
  try {
      const id = req.params.id;
      const updatedData = req.body;
      const options = { new: true };

      const result = await Todo.findByIdAndUpdate(
          id, updatedData, options
      )

      res.send(result)
  }
  catch (error) {
      res.status(500).json({ message: error.message })
  }
})

/**
 * Delete by ID Method
 */
router.delete('/delete/:id', async (req, res) => {
  try {
      const id = req.params.id;
      const data = await Todo.findByIdAndDelete(id)
      res.send(`Document with ${data.todo_title} has been deleted..`)
  }
  catch (error) {
      res.status(400).json({ message: error.message })
  }
})

module.exports = router;