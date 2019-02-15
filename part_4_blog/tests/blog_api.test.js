const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../app')

const api = supertest(app)

test('notes are returned as json', async () => {
  await api
    .get('/api/blogs')
    .expect(200)
    .expect('Content-Type', /application\/json/)
})

test('all 6 blogs are returned', async () => {
  const response = await api
    .get('/api/blogs')

  expect(response.body.length).toBe(6)
})

test('id key has no underscore', async() => {
  const response = await api
    .get('/api/blogs')

  expect(response.body[0].id).toBeDefined()
})

afterAll(() => {
  mongoose.connection.close()
})
