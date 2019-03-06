import React from 'react'
import BlogForm from './BlogForm'
import BlogList from './BlogList'
import Notice from './Notice'
import Header from './Header'
import Toggleable from './Toggleable'
import PropTypes from 'prop-types'

const BlogScreen = (user, handleLogout, setBlogs, blogs) => (
  <div>
    <Notice />
    <p>
      Logged in as {user.name}
      <button onClick={handleLogout}>Log out</button>
    </p>
    <Header title="Blogs" />
    <Toggleable buttonLabel="Add a Blog">
      <BlogForm setBlogs={setBlogs} blogs={blogs} />
    </Toggleable>
    <BlogList blogs={blogs} setBlogs={setBlogs} user={user} />
  </div>
)

BlogScreen.propTypes = {
  user: PropTypes.func.isRequired,
  handleLogout: PropTypes.func.isRequired,
  setBlogs: PropTypes.func.isRequired,
  blogs: PropTypes.func.isRequired
}

export default BlogScreen
