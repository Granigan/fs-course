import { useState, useEffect } from 'react'
import BlogScreen from './components/BlogScreen'
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

  return user === null
    ? LoginScreen(errorMessage, setUser, addNotice)
    : BlogScreen(
      errorMessage,
      successMessage,
      user,
      handleLogout,
      setBlogs,
      addNotice,
      blogs
    )
}

export default App
