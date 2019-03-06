const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../app')
const helper = require('./test_helper')
const User = require('../models/user')

const api = supertest(app)

describe('when there is initially one user at db', async () => {
  beforeEach(async () => {
    await User.remove({})
    const user = new User({ username: 'root', name: 'superuser', password: 'sekret' })
    await user.save()
  })

  test('creation fails as bad request if username is taken', async() => {
    const usersAtStart = await helper.usersInDb()

    const newUser = {
      username: 'root',
      name: 'Vauhti-Tauriainen',
      password: 'vito',
    }

    await api
      .post('/api/users')
      .send(newUser)
      .expect(400)

    const usersAtEnd = await helper.usersInDb()
    expect(usersAtEnd.length).toBe(usersAtStart.length)
  })


  test('creation fails as bad request if password is below 3 characters', async() => {
    const usersAtStart = await helper.usersInDb()

    const newUser = {
      username: 'juhataur',
      name: 'Vauhti-Tauriainen',
      password: 'vi',
    }

    await api
      .post('/api/users')
      .send(newUser)
      .expect(400)

    const usersAtEnd = await helper.usersInDb()
    expect(usersAtEnd.length).toBe(usersAtStart.length)
  })

  test('creation succeeds with a fresh username', async () => {
    const usersAtStart = await helper.usersInDb()

    const newUser = {
      username: 'juhataur',
      name: 'Vauhti-Tauriainen',
      password: 'vito',
    }

    await api
      .post('/api/users')
      .send(newUser)
      .expect(200)
      .expect('Content-Type', /application\/json/)

    const usersAtEnd = await helper.usersInDb()
    expect(usersAtEnd.length).toBe(usersAtStart.length + 1)

    const usernames = usersAtEnd.map(user => user.username)
    expect(usernames).toContain(newUser.username)
  })
})

afterAll(() => {
  mongoose.connection.close()
})