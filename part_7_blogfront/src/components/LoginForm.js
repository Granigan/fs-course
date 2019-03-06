import React from 'react'
import { connect } from 'react-redux'
import loginService from '../services/login'
import blogService from '../services/blogs'
import PropTypes from 'prop-types'
import { useField } from '../hooks'
import { setNotice } from '../reducers/noticeReducer'

const LoginForm = ({ setNotice, setUser }) => {
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
      setNotice('Login successful!', 'success', 3)
    } catch (exception) {
      password.reset()
      setNotice('Invalid username or password.', 'error', 5)
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
  setUser: PropTypes.func.isRequired
}

const ConnectedLoginForm = connect(
  null,
  { setNotice }
)(LoginForm)

export default ConnectedLoginForm
