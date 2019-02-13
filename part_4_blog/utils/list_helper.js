const lodash = require('lodash')

const dummy = blogs => {
  return 1
}

const totalLikes = blogs => {
  return blogs
    .map(blog => blog.likes)
    .reduce((total, likes) => total + likes, 0)
}

const favouriteBlog = blogs => {
  if (blogs.length === 0) return { title: 'not available' }

  return blogs.sort((a, b) => {
    if (a.likes > b.likes) return -1
    if (b.likes > a.likes) return 1
    return 0
  })[0]
}

const mostBlogs = blogs => {
  if (blogs.length === 0) return { author: 'not available', blogs: 0 }

  return lodash(blogs)
    .countBy('author')
    .map((amount, name) => ({ author: name, blogs: amount }))
    .sort((a, b) => b.blogs - a.blogs
    ).first()
}

const mostLikes = blogs => {}

module.exports = {
  dummy,
  totalLikes,
  favouriteBlog,
  mostBlogs,
  mostLikes
}
