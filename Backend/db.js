const mongoose = require('mongoose')

mongoose.connect('<mongodburi>')

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
