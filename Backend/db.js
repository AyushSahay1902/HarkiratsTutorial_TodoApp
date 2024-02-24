const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://ayushsahay:zig1902@todoapp.nzpxh2o.mongodb.net/todos')

const todoSchema = mongoose.Schema({
  title: String,
  description: String,
  isCompleted: Boolean,
})

const todo = mongoose.model('todos', todoSchema)

module.exports = {
  todo,
}

//ayushsahay
//zig1902