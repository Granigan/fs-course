import React, { useState, useEffect } from 'react'
import BlogForm from './components/BlogForm'
import BlogList from './components/BlogList'
import Notice from './components/Notice'
import Header from './components/Header'
import Button from './components/Button'
import LoginScreen from './components/LoginScreen'
import blogService from './services/blogs'
import './index.css'

const App = () => {
  const [blogs, setBlogs] = useState([])
  const [user, setUser] = useState(null)
  const [errorMessage, setErrorMessage] = useState(null)
  const [successMessage, setSuccessMessage] = useState(null)

  const handleLogout = event => {
    event.preventDefault()
    window.localStorage.removeItem('loggedBlogAppUser')
    setUser(null)
    blogService.setToken('')
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

  const BlogScreen = () => (
    <div>
      <Notice message={errorMessage} type="error" />
      <Notice message={successMessage} type="success" />
      <p>
        Logged in as {user.name}
        <Button handleClick={handleLogout} name="Log out" />
      </p>
      <BlogForm setBlogs={setBlogs} addNotice={addNotice} blogs={blogs} />
      <Header title="Blogs" />
      <BlogList blogs={blogs} />
    </div>
  )

  return user === null
    ? LoginScreen(errorMessage, successMessage, setUser, addNotice)
    : BlogScreen()
}

export default App
