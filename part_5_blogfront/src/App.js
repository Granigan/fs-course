import React, { useState, useEffect } from 'react'
import LoginForm from './components/LoginForm'
import BlogForm from './components/BlogForm'
import BlogList from './components/BlogList'
import blogService from './services/blogs'
import loginService from './services/login'
import './index.css'

const App = () => {
  const [blogs, setBlogs] = useState([])
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [user, setUser] = useState(null)
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

  const addBlog = async ({ event, title, author, url }) => {
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

  const Header = ({ title }) => <h2>{title}</h2>

  const Button = ({ handleClick, name }) => (
    <button onClick={handleClick}>{name}</button>
  )

  if (user === null) {
    return (
      <div>
        <Header title="Please log in." />
        <Notice message={errorMessage} type="error" />
        <Notice message={successMessage} type="success" />
        <LoginForm
          handleSubmit={handleLogin}
          username={username}
          password={password}
          setUsername={setUsername}
          setPassword={setPassword}
        />
      </div>
    )
  }
  return (
    <div>
      <Notice message={errorMessage} type="error" />
      <Notice message={successMessage} type="success" />
      <p>Logged in as {user.name}</p>
      <Button handleClick={handleLogout} name="Log out" />
      <Header title="Add a New Blog" />
      <BlogForm handleSubmit={addBlog} />
      <Header title="Blogs" />
      <BlogList blogs={blogs} />
    </div>
  )
}

export default App
