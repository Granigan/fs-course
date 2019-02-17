const jwt = require('jsonwebtoken')
const blogsRouter = require('express').Router()
const Blog = require('../models/blog')
const User = require('../models/user')

const getTokenFrom = request => {
  const authorization = request.get('authorization')
  if (authorization && authorization.toLowerCase().startsWith('bearer ')) {
    return authorization.substring(7)
  }
  return null
}

blogsRouter.get('/', async (request, response) => {
  const blogs = await Blog.find({}).populate('user', { username: 1, name: 1 })
  response.json(blogs.map(blog => blog.toJSON()))
})

blogsRouter.post('/', async (request, response, next) => {
  const body = request.body
  const token = getTokenFrom(request)

  try {
    const decodedToken = jwt.verify(token, process.env.SECRET)
    if (!token || !decodedToken.id) {
      return response.status(401).json({ error: 'token missing or invalid' })
    }

    const user = await User.findById(decodedToken.id)

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
      const result = await blog.save()
      user.blogs = user.blogs.concat(result._id)
      await user.save()
      response.status(201).json(result)
    }
  } catch (error) {
    next(error)
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
