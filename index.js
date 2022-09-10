const connectDB = require('./db/connect')
const express = require('express')
const app = express()
const PORT = 3000
const tasks = require('./routes/tasks')
const URL = process.env.MONGODB_URI


const start = async () => {
  try {
    await connectDB(URL)
    console.log('DB CONNECTED ...')
    app.listen(PORT, console.log(`Server listening on port ${PORT}`))
  } catch (error) {
    console.log(error)
  }
}

//middleware
app.use(express.json())

// routes
app.get('/hello', (req,res) => {
  res.send('Task Manager app')
})


app.use('/api/v1/tasks', tasks)

start()