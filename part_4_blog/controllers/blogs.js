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

blogsRouter.delete('/:id', async (request, response) => {
  const result = await Blog.findByIdAndRemove(request.params.id)
  response.status(204).json(result)
})

blogsRouter.put('/:id', async (request, response) => {
  const body = await request.body

  if (typeof body.likes === 'undefined') {
    response.status(400).send({ error: 'Amount of likes must be given.' })
  } else {
    const blog = {
      likes: body.likes
    }
    const result = await Blog.findByIdAndUpdate(request.params.id, blog, {
      new: true
    })
    response.status(200).json(result)
  }
})

module.exports = blogsRouter
