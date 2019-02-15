const listHelper = require('../utils/list_helper')
const helper = require('./test_helper')

describe('blog with most likes', () => {
  test('when exactly one blog', () => {
    expect(listHelper.favouriteBlog([helper.allBlogs[0]])).toEqual(helper.allBlogs[0])
  })

  test('when no blogs', () => {
    expect(listHelper.favouriteBlog([])).toEqual({ title: 'not available' })
  })

  test('when two blogs', () => {
    const blogs = [helper.allBlogs[0], helper.allBlogs[1]]

    expect(listHelper.favouriteBlog(blogs)).toEqual(helper.allBlogs[0])
  })

  test('when all blogs', () => {
    expect(listHelper.favouriteBlog(helper.allBlogs)).toEqual(
      helper.allBlogs[2]
    )
  })
})

describe('most productive author', () => {
  test('when exactly one blog', () => {
    expect(listHelper.mostBlogs([helper.allBlogs[0]])).toEqual({
      author: 'Michael Chan',
      blogs: 1
    })
  })

  test('when no blogs', () => {
    expect(listHelper.mostBlogs([])).toEqual({
      author: 'not available',
      blogs: 0
    })
  })

  test('when all blogs', () => {
    expect(listHelper.mostBlogs(helper.allBlogs)).toEqual({
      author: 'Robert C. Martin',
      blogs: 3
    })
  })
})

describe('most liked author', () => {
  test('when exactly one blog', () => {
    expect(listHelper.mostLikes([helper.allBlogs[0]])).toEqual({
      author: 'Michael Chan',
      likes: 7
    })
  })

  test('when no blogs', () => {
    expect(listHelper.mostLikes([])).toEqual({
      author: 'not available',
      likes: 0
    })
  })

  test('when all blogs', () => {
    expect(listHelper.mostLikes(helper.allBlogs)).toEqual({
      author: 'Edsger W. Dijkstra',
      likes: 17
    })
  })
})
