import { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import BlogScreen from './components/BlogScreen'
import LoginScreen from './components/LoginScreen'
import blogService from './services/blogs'
import { initBlogs } from './reducers/blogReducer'
import './index.css'

const App = props => {
  const [blogs, setBlogs] = useState([])
  const [user, setUser] = useState(null)

  const handleLogout = event => {
    event.preventDefault()
    window.localStorage.removeItem('loggedBlogAppUser')
    setUser(null)
    blogService.setToken('')
  }

  useEffect(() => {
    props.initBlogs()
  }, [])

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedBlogAppUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      setUser(user)
    }
  }, [])

  return user === null
    ? LoginScreen(setUser)
    : BlogScreen(user, handleLogout, setBlogs, blogs)
}

const mapStateToProps = state => {
  return { blogs: state.blog }
}

export default connect(
  mapStateToProps,
  { initBlogs }
)(App)
