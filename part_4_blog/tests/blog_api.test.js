const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../app')

const api = supertest(app)

test.only('all 6 blogs are returned', async () => {
  const response = await api.get('api/blogs/')
  console.log(response.body)
  expect(response.body.length).toBe(6)
})

afterAll(() => {
  mongoose.connection.close()
})
