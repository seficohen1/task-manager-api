const express = require('express')

const router = express.Router()
const {getAllTasks, updateTask, deleteTask, addNewTask, getSingleTask} = require('../controllers/tasks')

router.route('/').get(getAllTasks)
router.route('/:id').get(getSingleTask)
router.route('/').post(addNewTask)
router.route('/:id').patch(updateTask)
router.route('/:id').delete(deleteTask)


module.exports = router