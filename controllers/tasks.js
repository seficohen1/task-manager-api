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

const updateTask = async (req, res) => {
 const {id: taskID} = req.params
 

 try {  
   const updatedTask = await Task.findOneAndUpdate({_id: taskID}, req.body, { 
     new: true,
     runValidators: true
   })
   res.json(updatedTask)

   if(!updatedTask) return res.status(404).send('it seems like there is no task with id that matches your request')
 } catch (error) {
  res.status(500).send(error)
 }
}

const deleteTask = async (req, res) => {
  const {id: taskID} = req.params
  try {
    const task = await Task.findOneAndDelete({_id: taskID})
    

    if(!task) return res.status(404).send('it seems like there is no task with id that matches your request')
    res.status(200).send(`task ${task.title} with ID ${taskID} has been deleted from DB`)
  } catch (error) {
    res.status(500).send(error)
  }
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

