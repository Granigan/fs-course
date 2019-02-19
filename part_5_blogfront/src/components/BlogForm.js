import React, { useState } from 'react'
import blogService from '../services/blogs'

const BlogForm = ({ setBlogs, addNotice, blogs }) => {
  const [author, setAuthor] = useState('')
  const [title, setTitle] = useState('')
  const [url, setUrl] = useState('')

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
  )
}

export default BlogForm
