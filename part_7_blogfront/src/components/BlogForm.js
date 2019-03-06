import React from 'react'
import { connect } from 'react-redux'
import blogService from '../services/blogs'
import { useField } from '../hooks'
import { setNotice } from '../reducers/noticeReducer'
import { addBlog } from '../reducers/blogReducer'

const BlogForm = ({ addBlog, setNotice, setBlogs }) => {
  const author = useField('text')
  const title = useField('text')
  const url = useField('text')

  const handleSubmit = async event => {
    event.preventDefault()
    try {
      await addBlog(
        title.inputProps.value,
        author.inputProps.value,
        url.inputProps.value
      )
      const allBlogs = await blogService.getAll()
      setBlogs(allBlogs)
      setNotice(
        `${title.inputProps.value} by ${
          author.inputProps.value
        } has been added!`,
        'success',
        5
      )
      title.reset()
      author.reset()
      url.reset()
    } catch (error) {
      setNotice(error.response.data.error, 'error', 10)
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
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

export default connect(
  null,
  { setNotice, addBlog }
)(BlogForm)
