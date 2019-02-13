const listHelper = require('../utils/list_helper')
const testData = require('./testData')

describe('blog with most likes', () => {
  test('when exactly one blog', () => {
    const blogs = [{
      _id: '5a422a851b54a676234d17f7',
      title: 'React patterns',
      author: 'Michael Chan',
      url: 'https://reactpatterns.com/',
      likes: 7,
      __v: 0
    }]

    expect(listHelper.favouriteBlog(blogs)).toEqual(blogs[0])
  })

  test('when no blogs', () => {
    const blogs = []

    expect(listHelper.favouriteBlog(blogs)).toEqual({ title: 'not available' })
  })

  test('when two blogs', () => {
    const favourite = {
      _id: '5a422a851b54a676234d17f7',
      title: 'React patterns',
      author: 'Michael Chan',
      url: 'https://reactpatterns.com/',
      likes: 12,
      __v: 0
    }

    const blogs = [{
      _id: '5a422a851b54a676234d17f8',
      title: 'React',
      author: 'Michael',
      url: 'https://reactpatterns.com/',
      likes: 7,
      __v: 0
    }, favourite]

    expect(listHelper.favouriteBlog(blogs)).toEqual(favourite)
  })

  test('when all blogs', () => {
    const favourite = {
      _id: '5a422b3a1b54a676234d17f9',
      title: 'Canonical string reduction',
      author: 'Edsger W. Dijkstra',
      url: 'http://www.cs.utexas.edu/~EWD/transcriptions/EWD08xx/EWD808.html',
      likes: 12,
      __v: 0
    }

    expect(listHelper.favouriteBlog(testData.allBlogs())).toEqual(favourite)
  })
})