const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../app')
const helper = require('./test_helper')
const Blog = require('../models/blog')

const api = supertest(app)

beforeEach(async () => {
  await Blog.remove({})
  console.log('DB cleared')

  const blogObjects = helper.allBlogs().map(blog => new Blog(blog))
  console.log(blogObjects)

  const promiseArray = blogObjects.map(blog => blog.save)

  await Promise.all(promiseArray)
  console.log('Entries saved')
  console.log('DB initialised')
})

test('notes are returned as json', async () => {
  await api
    .get('/api/blogs')
    .expect(200)
    .expect('Content-Type', /application\/json/)
})

test.only('all 6 blogs are returned', async () => {
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
