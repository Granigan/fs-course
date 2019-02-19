import React, { useState, useEffect } from 'react'
import LoginForm from './components/LoginForm'
import BlogForm from './components/BlogForm'
import BlogList from './components/BlogList'
import Notice from './components/Notice'
import Header from './components/Header'
import Button from './components/Button'
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
      blogService.setToken(user.token)
      addNotice('success', `Login successful!`)
    } catch (exception) {
      addNotice('error', 'Invalid username or password.')
    }
  }

  const handleLogout = async event => {
    window.localStorage.removeItem('loggedBlogAppUser')
    setUser(null)
  }

  const addNotice = (type, message) => {
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
      <BlogForm setBlogs={setBlogs} addNotice={addNotice} blogs={blogs} />
      <Header title="Blogs" />
      <BlogList blogs={blogs} />
    </div>
  )
}

export default App
