import React, { useState } from 'react'

const [author, setAuthor] = useState('')
const [title, setTitle] = useState('')
const [url, setUrl] = useState('')

const FormBlog = ({ handleSubmit }) => (
  <form onSubmit={handleSubmit({ author: author, title: title, url: url })}>
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
)

export default FormBlog
