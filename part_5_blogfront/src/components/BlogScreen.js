import React from 'react'
import BlogForm from './BlogForm'
import BlogList from './BlogList'
import Notice from './Notice'
import Header from './Header'
import Toggleable from './Toggleable'

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
    <p>
      Logged in as {user.name}
      <button onClick={handleLogout}>Log out</button>
    </p>
    <Header title="Blogs" />
    <Toggleable buttonLabel="Add a Blog">
      <BlogForm setBlogs={setBlogs} addNotice={addNotice} blogs={blogs} />
    </Toggleable>
    <BlogList blogs={blogs} addNotice={addNotice} setBlogs={setBlogs} />
  </div>
)

export default BlogScreen
