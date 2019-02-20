import React from 'react'
import Blog from './Blog'

const BlogList = ({ addNotice, blogs }) =>
  blogs
    .sort((a, b) => b.likes - a.likes)
    .map(blog => <Blog key={blog.id} blog={blog} addNotice={addNotice} />)

export default BlogList
