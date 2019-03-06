import React from 'react'
import LoginForm from './LoginForm'
import Notice from './Notice'
import Header from './Header'

const LoginScreen = setUser => {
  return (
    <div>
      <Header title="Please log in." />
      <Notice />
      <LoginForm setUser={setUser} />
    </div>
  )
}

export default LoginScreen
