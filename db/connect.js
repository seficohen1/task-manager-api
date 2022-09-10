const mongoose = require('mongoose')
require('dotenv').config()

const DBPASSWORD = process.env.MONGODB_PASSWORD

const connectionString = `mongodb+srv://seficohen1:${DBPASSWORD}@cluster0.u3r9dn9.mongodb.net/?retryWrites=true&w=majority`


const connectDB = (url) => {
  return mongoose.connect(connectionString)
}

module.exports = connectDB;