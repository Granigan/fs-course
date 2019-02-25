import React from 'react'
import blogService from '../services/blogs'
import { useField } from '../hooks'

const BlogForm = ({ setBlogs, addNotice, blogs }) => {
  const author = useField('text')
  const title = useField('text')
  const url = useField('text')

  const addBlog = async event => {
    event.preventDefault()

    try {
      const response = await blogService.create({
        newObject: {
          title: title.inputProps.value,
          author: author.inputProps.value,
          url: url.inputProps.value
        }
      })
      const allBlogs = await blogService.getAll()
      setBlogs(allBlogs)
      title.reset()
      author.reset()
      url.reset()
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
          <input {...author.inputProps} />
        </div>
        <div>
          Title:
          <input {...title.inputProps} />
        </div>
        <div>
          URL:
          <input {...url.inputProps} />
        </div>
        <button type="submit">Add</button>
      </form>
    </div>
  )
}

export default BlogForm
