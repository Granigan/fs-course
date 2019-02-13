const dotenv = require('dotenv').config()

const PORT = process.env.PORT
const mongoUrl = process.env.MONGODB_URI


module.exports = {
  PORT,
  mongoUrl
}