import React from 'react'

const LoginForm = ({
  handleSubmit,
  username,
  password,
  setUsername,
  setPassword
}) => (
  <form onSubmit={handleSubmit}>
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
)

export default LoginForm
