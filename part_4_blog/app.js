const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const config = require('./utils/config')
const mongoose = require('mongoose')
const blogsRouter = require('./controllers/blogs')

mongoose.connect(config.mongoUrl, { useNewUrlParser: true })

app.use(cors())
app.use(bodyParser.json())

app.use('/api/blogs/', blogsRouter)

module.exports = app