const Blog = require('../models/blog')
const User = require('../models/user')

const blogsInDb = async () => {
  const blogs = await Blog.find({})
  return blogs.map(blog => blog.toJSON())
};

const usersInDb = async () => {
  const users = await User.find({})
  return users.map(user => user.toJSON())
};

const allUsers = [
  {
    blogs: [
      '5a422b3a1b54a676234d17f9',
      '5a422b891b54a676234d17fa',
      '5a422ba71b54a676234d17fb',
      '5a422bc61b54a676234d17fc'
    ],
    _id: '5c6969432a56c356d0552c86',
    username: 'juhataur',
    name: 'Vauhti-Tauriainen',
    passwordHash:
      '$2b$10$M.IDhmWUtj8.9hSFc5DKs.FaPyZC4cpr9PmKu2cxRq0y3j/7aHlvi',
    __v: 0
  },

  {
    blogs: ['5a422a851b54a676234d17f7', '5a422aa71b54a676234d17f8'],
    _id: '5c696987f11790573e0e4b1b',
    username: 'sudo',
    name: 'superuser',
    passwordHash:
      '$2b$10$rkVQLLzmM7uq0V1lcI8snehmPyRfASNULDxql9QOPpw6X49ElDbPa',
    __v: 0
  }
]

const allBlogs = [
  {
    _id: '5a422a851b54a676234d17f7',
    title: 'React patterns',
    author: 'Michael Chan',
    url: 'https://reactpatterns.com/',
    likes: 7,
    __v: 0,
    user: '5c696987f11790573e0e4b1b'
  },
  {
    _id: '5a422aa71b54a676234d17f8',
    title: 'Go To Statement Considered Harmful',
    author: 'Edsger W. Dijkstra',
    url:
      'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
    likes: 5,
    __v: 0,
    user: '5c696987f11790573e0e4b1b'
  },
  {
    _id: '5a422b3a1b54a676234d17f9',
    title: 'Canonical string reduction',
    author: 'Edsger W. Dijkstra',
    url: 'http://www.cs.utexas.edu/~EWD/transcriptions/EWD08xx/EWD808.html',
    likes: 12,
    __v: 0,
    user: '5c6969432a56c356d0552c86'
  },
  {
    _id: '5a422b891b54a676234d17fa',
    title: 'First class tests',
    author: 'Robert C. Martin',
    url:
      'http://blog.cleancoder.com/uncle-bob/2017/05/05/TestDefinitions.htmll',
    likes: 10,
    __v: 0,
    user: '5c6969432a56c356d0552c86'
  },
  {
    _id: '5a422ba71b54a676234d17fb',
    title: 'TDD harms architecture',
    author: 'Robert C. Martin',
    url:
      'http://blog.cleancoder.com/uncle-bob/2017/03/03/TDD-Harms-Architecture.html',
    likes: 0,
    __v: 0,
    user: '5c6969432a56c356d0552c86'
  },
  {
    _id: '5a422bc61b54a676234d17fc',
    title: 'Type wars',
    author: 'Robert C. Martin',
    url: 'http://blog.cleancoder.com/uncle-bob/2016/05/01/TypeWars.html',
    likes: 2,
    __v: 0,
    user: '5c6969432a56c356d0552c86'
  }
]

module.exports = {
  allBlogs,
  allUsers,
  blogsInDb,
  usersInDb
}
