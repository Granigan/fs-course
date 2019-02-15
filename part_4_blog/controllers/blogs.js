const blogsRouter = require('express').Router()
const Blog = require('../models/blog')

blogsRouter.get('/', async (request, response) => {
  const blogs = await Blog.find({})
  response.json(blogs.map(blog => blog.toJSON()))
})

blogsRouter.post('/', async (request, response) => {
  const blog = new Blog(request.body)
  if (typeof blog.title === 'undefined' || typeof blog.url === 'undefined') {
    response.status(400).send({ error: 'Title and URL must be defined' })
  } else {
    if (typeof blog.likes === 'undefined') blog.likes = 0
    const result = await blog.save()
    response.status(201).json(result)
  }
})

module.exports = blogsRouter
