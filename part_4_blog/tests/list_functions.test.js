const listHelper = require('../utils/list_helper')
const helper = require('./test_helper')

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

    expect(listHelper.favouriteBlog(helper.allBlogs)).toEqual(favourite)
  })
})

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
    expect(listHelper.mostLikes(helper.allBlogs)).toEqual({ author: 'Edsger W. Dijkstra', likes: 17 })
  })
})

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
    expect(listHelper.totalLikes(helper.allBlogs)).toBe(36)
  })
})