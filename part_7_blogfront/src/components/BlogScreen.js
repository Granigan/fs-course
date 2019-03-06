import React from 'react'
import BlogForm from './BlogForm'
import BlogList from './BlogList'
import Notice from './Notice'
import Header from './Header'
import Toggleable from './Toggleable'
import PropTypes from 'prop-types'
import ReduxNotice from './ReduxNotice'

const BlogScreen = (
  errorMessage,
  successMessage,
  user,
  handleLogout,
  setBlogs,
  addNotice,
  blogs
) => (
  <div>
    <Notice message={errorMessage} type="error" />
    <Notice message={successMessage} type="success" />
    <ReduxNotice />
    <p>
      Logged in as {user.name}
      <button onClick={handleLogout}>Log out</button>
    </p>
    <Header title="Blogs" />
    <Toggleable buttonLabel="Add a Blog">
      <BlogForm setBlogs={setBlogs} addNotice={addNotice} blogs={blogs} />
    </Toggleable>
    <BlogList
      blogs={blogs}
      addNotice={addNotice}
      setBlogs={setBlogs}
      user={user}
    />
  </div>
)

BlogScreen.propTypes = {
  errorMessage: PropTypes.func.isRequired,
  successMessage: PropTypes.func.isRequired,
  user: PropTypes.func.isRequired,
  handleLogout: PropTypes.func.isRequired,
  setBlogs: PropTypes.func.isRequired,
  addNotice: PropTypes.func.isRequired,
  blogs: PropTypes.func.isRequired
}

export default BlogScreen
