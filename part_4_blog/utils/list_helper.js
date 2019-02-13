const dummy = blogs => {
  return 1
}

const totalLikes = blogs => {
  return blogs.map(blog => blog.likes).reduce((total,likes) => total+likes, 0)
}

const favouriteBlog = blogs => {

  if(blogs.length < 1)  return { title: 'not available' }

  return blogs.sort((a, b) => {
    if(a.likes > b.likes) return -1
    if(b.likes > a.likes) return 1
    return 0
  })[0]
}

module.exports = {
  dummy,
  totalLikes,
  favouriteBlog
}