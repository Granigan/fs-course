const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const config = require('./utils/config')
const mongoose = require('mongoose')
const blogsRouter = require('./controllers/blogs')
const logger = require('./utils/logger')

mongoose.connect(config.mongoUrl, { useNewUrlParser: true })
  .then(() => {
    logger.info('connected to MongoDB')
  })
  .catch(error => {
    logger.error('error connecting to MongoDB:', error.message)
  })

app.use(cors())
app.use(bodyParser.json())

app.use('/api/blogs/', blogsRouter)

module.exports = app