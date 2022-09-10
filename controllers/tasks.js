const { raw } = require("express")

const getAllTasks = (req, res) => {
  res.status(200)
  res.send('all items')
}

const addNewTask = (req, res) => {
  
  res.json(req.body)
  const obj = JSON.stringify(req.body)
  console.log(obj)
 

}

const updateTask = (req, res) => {
  res.send('updated task')
}

const deleteTask = (req, res) => {
  res.send('deleting task')
}

const getSingleTask = (req, res) => {
  const task = req.params.id
  console.log(task)
  res.send(`getting task # ${task}`)
  
}

module.exports = {
  getAllTasks,
  addNewTask,
  updateTask,
  deleteTask,
  getSingleTask
}

