import React, { useState } from 'react'
import { connect } from 'react-redux'
import { setNotice } from '../reducers/noticeReducer'
import { likeBlog } from '../reducers/blogReducer'
import blogService from '../services/blogs'

const Blog = ({ likeBlog, setNotice, blog, blogs, setBlogs, user }) => {
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

  const handleLike = async event => {
    event.preventDefault()
    try {
      await likeBlog(blog.id)
      const allBlogs = await blogService.getAll()
      setBlogs(allBlogs)
      setNotice(`You liked ${blog.title}!`, 'success', 5)
    } catch (error) {
      setNotice(error.response.data.error, 'error', 10)
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
        setNotice(`${blog.title} was removed.`, 'success', 5)
        setBlogs(blogs.filter(b => b.id !== blog.id))
      } catch (error) {
        setNotice(error.response.data.error, 'error', 10)
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
        {blog.likes} likes <button onClick={handleLike}>Like</button>
        <br />
        Added by {blog.user.name}
        <button style={removeButtonVisibility} onClick={removeBlog}>
          Remove
        </button>
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {}
}

const mapDispatchToProps = {
  setNotice,
  likeBlog
}

const ConnectedBlog = connect(
  mapStateToProps,
  mapDispatchToProps
)(Blog)

export default ConnectedBlog
