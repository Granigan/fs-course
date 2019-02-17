const blogsRouter = require('express').Router()
const Blog = require('../models/blog')
const User = require('../models/user')

blogsRouter.get('/', async (request, response) => {
  const blogs = await Blog.find({}).populate('user', { username: 1, name: 1 })
  response.json(blogs.map(blog => blog.toJSON()))
})

blogsRouter.post('/', async (request, response, next) => {
  const body = request.body
  let user = {}
  if (typeof body.userId === 'undefined') {
    const users = await User.find({})
    user = users.map(user => user.toJSON())[1]
    console.log(user)
  } else {
    user = await User.findById(body.userId)
  }

  if (typeof body.title === 'undefined' || typeof body.url === 'undefined') {
    response.status(400).send({ error: 'Title and URL must be defined' })
  } else {
    const blog = new Blog({
      author: body.author,
      title: body.title,
      url: body.url,
      user: user._id,
      likes: typeof body.likes === 'undefined' ? 0 : body.likes
    })
    try {
      const result = await blog.save()
      response.status(201).json(result)
    } catch (error) {
      next(error)
    }
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
