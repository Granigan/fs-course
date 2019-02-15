const listHelper = require('../utils/list_helper')
const helper = require('./test_helper')

describe('most productive author', () => {
  test('when exactly one blog', () => {
    const blogs = [{
      _id: '5a422a851b54a676234d17f7',
      title: 'React patterns',
      author: 'Michael Chan',
      url: 'https://reactpatterns.com/',
      likes: 7,
      __v: 0
    }]
    expect(listHelper.mostBlogs(blogs)).toEqual({ author: 'Michael Chan', blogs: 1 })
  })

  test('when no blogs', () => {
    const blogs = []
    expect(listHelper.mostBlogs(blogs)).toEqual({ author: 'not available', blogs: 0 })
  })

  test('when all blogs', () => {
    expect(listHelper.mostBlogs(helper.allBlogs)).toEqual({ author: 'Robert C. Martin', blogs: 3 })
  })
})