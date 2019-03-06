import React from 'react'
import loginService from '../services/login'
import blogService from '../services/blogs'
import PropTypes from 'prop-types'
import { useField } from '../hooks'

const LoginForm = ({ addNotice, setUser }) => {
  const username = useField('text')
  const password = useField('password')

  const handleLogin = async event => {
    event.preventDefault()
    try {
      const user = await loginService.login({
        username: username.inputProps.value,
        password: password.inputProps.value
      })

      if (user === null)
        window.localStorage.setItem('loggedBlogAppUser', JSON.stringify(user))
      setUser(user)
      blogService.setToken(user.token)
      addNotice('success', 'Login successful!')
    } catch (exception) {
      password.reset()
      addNotice('error', 'Invalid username or password.')
    }
  }

  return (
    <form onSubmit={handleLogin}>
      <div>
        Username:
        <input {...username.inputProps} />
      </div>
      <div>
        Password:
        <input {...password.inputProps} />
      </div>
      <button type="submit">Log in</button>
    </form>
  )
}

LoginForm.propTypes = {
  addNotice: PropTypes.func.isRequired,
  setUser: PropTypes.func.isRequired
}

export default LoginForm
