import React from 'react'
import Blog from './Blog'

const BlogList = ({ addNotice, blogs, setBlogs, user }) =>
  blogs
    .sort((a, b) => b.likes - a.likes)
    .map(blog => (
      <Blog
        key={blog.id}
        blog={blog}
        addNotice={addNotice}
        blogs={blogs}
        setBlogs={setBlogs}
        user={user}
      />
    ))

export default BlogList
