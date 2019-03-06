const bcrypt = require('bcrypt')
const usersRouter = require('express').Router()
const User = require('../models/user')

usersRouter.get('/', async (request, response) => {
  const users = await User.find({}).populate('blogs', { title: 1, author: 1, url: 1 })
  response.json(users.map(user => user.toJSON()))
})

usersRouter.post('/', async (request, response, next) => {
  const body = request.body

  if (typeof body.password === 'undefined' || body.password.length < 3) {
    response
      .status(400)
      .send({ error: 'Password must be at least 8 characters long.' })
  } else {
    try {
      const saltRounds = 10
      const passwordHash = await bcrypt.hash(body.password, saltRounds)
      const user = new User({
        username: body.username,
        name: body.name,
        passwordHash
      })

      const savedUser = await user.save()
      console.log(savedUser)

      response.json(savedUser)
    } catch (error) {
      response.status(400).send({ error: error.message })
      next(error)
    }
  }
})

module.exports = usersRouter
