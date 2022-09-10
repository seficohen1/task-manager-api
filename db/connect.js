const mongoose = require('mongoose')
require('dotenv').config()





const connectDB = (url) => {
  return mongoose.connect(url)
}

module.exports = connectDB;