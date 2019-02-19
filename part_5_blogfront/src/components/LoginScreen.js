import React from 'react'
import LoginForm from './LoginForm'
import Notice from './Notice'
import Header from './Header'

const LoginScreen = (errorMessage, successMessage, setUser, addNotice) => {
  // LoginForm row causes a "Can't perform a React state update
  // on an unmounted component" warning
  return (
    <div>
      <Header title="Please log in." />
      <Notice message={errorMessage} type="error" />
      <LoginForm addNotice={addNotice} setUser={setUser} />
    </div>
  )
}

export default LoginScreen
