import React, { useState } from 'react'
const Blog = ({ blog }) => {
  const [expanded, setExpanded] = useState(false)

  const showWhenExpanded = { display: expanded ? '' : 'none' }
  const hideWhenExpanded = { display: expanded ? 'none' : '' }

  const toggleExpand = () => setExpanded(!expanded)

  const blogStyle = {
    paddingTop: 10,
    paddingLeft: 2,
    border: 'solid',
    borderWidth: 1,
    marginBottom: 5
  }

  return (
    <div style={blogStyle}>
      <div style={hideWhenExpanded} onClick={toggleExpand}>
        {blog.title} by {blog.author}
      </div>
      <div style={showWhenExpanded}>
        <div onClick={toggleExpand}>
          {blog.title} by {blog.author} <br />
        </div>
        {blog.url} <br />
        {blog.likes} likes <button>Like</button>
        <br />
        Added by {blog.user.name}
      </div>
    </div>
  )
}
export default Blog
