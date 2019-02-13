const listHelper = require('../utils/list_helper')
const testData = require('./testData')


describe('total likes', () => {
  test('when exactly one blog', () => {
    const blogs = [{
      _id: '5a422a851b54a676234d17f7',
      title: 'React patterns',
      author: 'Michael Chan',
      url: 'https://reactpatterns.com/',
      likes: 7,
      __v: 0
    }]

    expect(listHelper.totalLikes(blogs)).toBe(7)
  })

  test('when no blogs', () => {
    const blogs = []

    expect(listHelper.totalLikes(blogs)).toBe(0)
  })

  test('when two blogs', () => {
    const blogs = [{
      _id: '5a422a851b54a676234d17f7',
      title: 'React patterns',
      author: 'Michael Chan',
      url: 'https://reactpatterns.com/',
      likes: 7,
      __v: 0
    },
    {
      _id: '5a422a851b54a676234d17f7',
      title: 'React patterns',
      author: 'Michael Chan',
      url: 'https://reactpatterns.com/',
      likes: 12,
      __v: 0
    }]
    expect(listHelper.totalLikes(blogs)).toBe(19)
  })

  test('when all blogs', () => {
    expect(listHelper.totalLikes(testData.allBlogs())).toBe(36)
  })
})