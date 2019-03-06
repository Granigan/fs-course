import React, { useState } from 'react'
import blogService from '../services/blogs'

const Blog = ({ addNotice, blog, blogs, setBlogs, user }) => {
  const [expanded, setExpanded] = useState(false)

  const showWhenExpanded = { display: expanded ? '' : 'none' }
  const hideWhenExpanded = { display: expanded ? 'none' : '' }

  const toggleExpand = () => setExpanded(!expanded)

  const isOwner = user.username === blog.user.username
  const removeButtonVisibility = { display: isOwner ? '' : 'none' }

  const blogStyle = {
    paddingTop: 10,
    paddingLeft: 2,
    border: 'solid',
    borderWidth: 1,
    marginBottom: 5
  }

  const addLike = async event => {
    event.preventDefault()
    try {
      blog.likes = blog.likes + 1
      const response = await blogService.update({
        id: blog.id,
        newDetails: {
          user: blog.user.id,
          title: blog.title,
          author: blog.author,
          url: blog.url,
          likes: blog.likes
        }
      })
      addNotice('success', `You liked ${response.title}!`)
    } catch (error) {
      addNotice('error', error.response.data.error)
    }
  }

  const removeBlog = async event => {
    event.preventDefault()
    if (
      window.confirm(
        `Are you sure you want to remove ${blog.title} by ${blog.author}?`
      )
    ) {
      try {
        await blogService.remove({ id: blog.id })
        addNotice('success', `${blog.title} was removed.`)
        setBlogs(blogs.filter(b => b.id !== blog.id))
      } catch (error) {
        addNotice('error', error.response.data.error)
      }
    }
  }

  return (
    <div style={blogStyle}>
      <div
        className="briefDetails"
        style={hideWhenExpanded}
        onClick={toggleExpand}>
        {blog.title} by {blog.author}
      </div>
      <div className="fullDetails" style={showWhenExpanded}>
        <div className="toggler" onClick={toggleExpand}>
          {blog.title} by {blog.author} <br />
        </div>
        {blog.url} <br />
        {blog.likes} likes <button onClick={addLike}>Like</button>
        <br />
        Added by {blog.user.name}
        <button style={removeButtonVisibility} onClick={removeBlog}>
          Remove
        </button>
      </div>
    </div>
  )
}
export default Blog
