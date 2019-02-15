const _ = require('lodash')

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

  console.log(_(blogs)
    .sort((a, b) => b.likes - a.likes)
    .first())

  return _(blogs)
    .sort((a, b) => b.likes - a.likes)
    .first()
}

const mostBlogs = blogs => {
  if (blogs.length === 0) return { author: 'not available', blogs: 0 }

  return _(blogs)
    .countBy('author')
    .map((amount, name) => ({ author: name, blogs: amount }))
    .sort((a, b) => b.blogs - a.blogs)
    .first()
}

const mostLikes = blogs => {
  if (blogs.length === 0) return { author: 'not available', likes: 0 }

  return _(blogs)
    .groupBy('author')
    .map((blogs, name) => ({
      author: name,
      likes: _(blogs)
        .map('likes')
        .sum()
    }))
    .sort((a, b) => b.likes - a.likes)
    .first()
}

module.exports = {
  dummy,
  totalLikes,
  favouriteBlog,
  mostBlogs,
  mostLikes
}
