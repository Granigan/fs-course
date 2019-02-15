const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../app')
const helper = require('./test_helper')
const Blog = require('../models/blog')

const api = supertest(app)

beforeEach(async () => {
  await Blog.remove({})
  const blogObjects = helper.allBlogs.map(blog => new Blog(blog))
  const promiseArray = blogObjects.map(blog => blog.save())
  await Promise.all(promiseArray)
})

describe('db is functioning', () => {
  test('notes are returned as json', async () => {
    await api
      .get('/api/blogs')
      .expect(200)
      .expect('Content-Type', /application\/json/)
  })

  test('all 6 blogs are returned', async () => {
    const response = await api.get('/api/blogs')

    expect(response.body.length).toBe(6)
  })

  test('id key has no underscore', async () => {
    const response = await api.get('/api/blogs')

    expect(response.body[0].id).toBeDefined()
  })
})

describe('POSTing is functioning', () => {
  test('valid blog can be added', async () => {
    const newBlog = {
      title: 'POST-testing for Dummies',
      author: 'Anon',
      url: '#',
      likes: 1
    }
    await api
      .post('/api/blogs')
      .send(newBlog)
      .expect(201)
      .expect('Content-Type', /application\/json/)

    const response = await api.get('/api/blogs')

    const contents = response.body.map(r => r.title)

    expect(response.body.length).toBe(helper.allBlogs.length + 1)
    expect(contents).toContain('POST-testing for Dummies')
  })

  test('set likes to zero when no likes given', async () => {
    const newBlog = {
      title: 'POST-testing for Dummies',
      author: 'Anon',
      url: '#',
    }
    await api
      .post('/api/blogs')
      .send(newBlog)
      .expect(201)
      .expect('Content-Type', /application\/json/)

    const response = await api.get('/api/blogs')

    const newEntry = response.body.filter(blog => blog.author === 'Anon')[0]

    expect(response.body.length).toBe(helper.allBlogs.length + 1)
    expect(newEntry.likes).toBe(0)
  })
})

afterAll(() => {
  mongoose.connection.close()
})
