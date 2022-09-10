const Task = require('../models/Task')


const getAllTasks = async (req, res) => {
  try {
    const allTasks = await Task.find({})
    res.status(200)
    res.json(allTasks)
  } catch (error) {
    res.status(500).send(error)
  }


}

const addNewTask = async (req, res) => {
 const {title, completed } = req.body
 
 try {
  const newTask = await Task.create({title, completed})
  res.status(201).send('success!')
 } catch (error) {
   res.status(500).json({msg: error})
   
 }

}

const updateTask = (req, res) => {
  const taskId = req.params.id

}

const deleteTask = (req, res) => {
  res.send('deleting task')
}

const getSingleTask = async (req, res) => {
  const {id: taskID} = req.params
  try {
    const task = await Task.findOne({_id: taskID})
    if(!task) return res.status(404).json({msg: 'no task with this ID'})

    res.status(200).json(task)
  } catch (error) {
    res.status(500).send(error)
  }

  
 
  
}

module.exports = {
  getAllTasks,
  addNewTask,
  updateTask,
  deleteTask,
  getSingleTask
}

