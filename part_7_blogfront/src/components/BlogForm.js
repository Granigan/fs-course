import React from 'react'
import { connect } from 'react-redux'
import blogService from '../services/blogs'
import { useField } from '../hooks'
import { setNotice } from '../reducers/noticeReducer'

const BlogForm = ({ setNotice, setBlogs, blogs }) => {
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
      setNotice(
        `${response.title} by ${response.author} has been added!`,
        'success',
        5
      )
    } catch (error) {
      setNotice(error.response.data.error, 'error', 10)
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

export default connect(
  null,
  { setNotice }
)(BlogForm)
