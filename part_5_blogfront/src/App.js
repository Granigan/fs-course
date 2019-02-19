import React, { useState, useEffect } from 'react'
import Blog from './components/Blog'
import blogService from './services/blogs'
import loginService from './services/login'
import './index.css'

const App = () => {
  const [blogs, setBlogs] = useState([])
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [user, setUser] = useState(null)
  const [author, setAuthor] = useState('')
  const [title, setTitle] = useState('')
  const [url, setUrl] = useState('')
  const [errorMessage, setErrorMessage] = useState(null)
  const [successMessage, setSuccessMessage] = useState(null)

  const handleLogin = async event => {
    event.preventDefault()
    try {
      const user = await loginService.login({
        username,
        password
      })

      if (user === null)
        window.localStorage.setItem('loggedBlogAppUser', JSON.stringify(user))
      setUser(user)
      setUsername('')
      setPassword('')
      addNotice('success', `Login successful!`)
    } catch (exception) {
      addNotice('error', 'Invalid username or password.')
    }
  }

  const handleLogout = async event => {
    window.localStorage.removeItem('loggedBlogAppUser')
    setUser(null)
  }

  const addBlog = async event => {
    event.preventDefault()
    const response = await blogService.create({
      newObject: {
        title: title,
        author: author,
        url: url
      },
      headers: {
        authorization: `bearer ${user.token}`
      }
    })
    try {
      setBlogs(blogs.concat(response))
      addNotice(
        'success',
        `${response.title} by ${response.author} has been added!`
      )
    } catch (error) {
      addNotice('error', error.response.data.error)
    }
  }

  const addNotice = (type, message, async) => {
    if (type === 'success') {
      setSuccessMessage(message)
    } else {
      setErrorMessage(message)
    }
    setTimeout(() => {
      setSuccessMessage(null)
      setErrorMessage(null)
    }, 5000)
  }

  useEffect(() => {
    blogService.getAll().then(blogs => setBlogs(blogs))
  }, [])

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedBlogAppUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      setUser(user)
    }
  }, [])

  const Notice = ({ message, type }) => {
    if (message === null) {
      return null
    }
    return <div className={type}>{message}</div>
  }

  if (user === null) {
    return (
      <div>
        <Notice message={errorMessage} type="error" />
        <Notice message={successMessage} type="success" />
        <h2>Please log in</h2>
        <form onSubmit={handleLogin}>
          <div>
            Username:
            <input
              type="text"
              value={username}
              name="username"
              onChange={({ target }) => setUsername(target.value)}
            />
          </div>
          <div>
            Password:
            <input
              type="password"
              value={password}
              name="password"
              onChange={({ target }) => setPassword(target.value)}
            />
          </div>
          <button type="submit">Log in</button>
        </form>
      </div>
    )
  }
  return (
    <div>
      <Notice message={errorMessage} type="error" />
      <Notice message={successMessage} type="success" />
      <p>Logged in as {user.name}</p>
      <button onClick={handleLogout}>Log out</button>
      <h2>Add a New Blog</h2>
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

      <h2>Blogs</h2>
      {blogs.map(blog => (
        <Blog key={blog.id} blog={blog} />
      ))}
    </div>
  )
}

export default App
