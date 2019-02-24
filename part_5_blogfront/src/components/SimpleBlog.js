import React from 'react'

const SimpleBlog = ({ blog, onClick }) => (
  <div className="simpleblog">
    <div>
      {blog.title} {blog.author}
    </div>
    <div>
      blog has {blog.likes} likes
      <button className="likeButton" onClick={onClick}>
        like
      </button>
    </div>
  </div>
)

export default SimpleBlog
