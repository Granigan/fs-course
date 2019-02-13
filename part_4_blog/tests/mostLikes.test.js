const listHelper = require('../utils/list_helper')
const testData = require('./testData')

describe('most liked author', () => {
  test('when exactly one blog', () => {
    const blogs = [{
      _id: '5a422a851b54a676234d17f7',
      title: 'React patterns',
      author: 'Michael Chan',
      url: 'https://reactpatterns.com/',
      likes: 7,
      __v: 0
    }]
    expect(listHelper.mostLikes(blogs)).toEqual({ author: 'Michael Chan', likes: 7 })
  })

  test('when no blogs', () => {
    const blogs = []
    expect(listHelper.mostLikes(blogs)).toEqual({ author: 'not available', likes: 0 })
  })

  test('when all blogs', () => {
    expect(listHelper.mostLikes(testData.allBlogs())).toEqual({ author: 'Edsger W. Dijkstra', likes: 17 })
  })
})