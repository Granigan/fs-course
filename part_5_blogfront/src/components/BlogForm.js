import React, { useState } from 'react'
import blogService from '../services/blogs'
import Button from './Button'

const BlogForm = ({ setBlogs, addNotice, blogs }) => {
  const [author, setAuthor] = useState('')
  const [title, setTitle] = useState('')
  const [url, setUrl] = useState('')
  const [blogFormVisible, setBlogFormVisible] = useState(false)

  const hideWhenBlogFormIsVisible = { display: blogFormVisible ? 'none' : '' }
  const showWhenBlogFormIsVisible = { display: blogFormVisible ? '' : 'none' }

  const addBlog = async event => {
    event.preventDefault()
    try {
      const response = await blogService.create({
        newObject: {
          title: title,
          author: author,
          url: url
        }
      })
      setBlogs(blogs.concat(response))
      addNotice(
        'success',
        `${response.title} by ${response.author} has been added!`
      )
    } catch (error) {
      addNotice('error', error.response.data.error)
    }
  }

  return (
    <div>
      <div style={hideWhenBlogFormIsVisible}>
        <button onClick={() => setBlogFormVisible(true)}>Add a Blog</button>
      </div>
      <div style={showWhenBlogFormIsVisible}>
        <button onClick={() => setBlogFormVisible(false)}>Cancel</button>
        <form onSubmit={addBlog}>
          <div>
            Author:
            <input
              type="text"
              value={author}
              name="author"
              onChange={({ target }) => setAuthor(target.value)}
            />
          </div>
          <div>
            Title:
            <input
              type="text"
              value={title}
              name="title"
              onChange={({ target }) => setTitle(target.value)}
            />
          </div>
          <div>
            URL:
            <input
              type="text"
              value={url}
              name="url"
              onChange={({ target }) => setUrl(target.value)}
            />
          </div>
          <button type="submit">Add</button>
        </form>
      </div>
    </div>
  )
}

export default BlogForm
