import blogservice from '../services/blogs'

const reducer = (state = [], action) => {
  switch (action.type) {
  case 'INITIALISE':
    return action.data
  case 'LIKE':
    return state.map(b => (b.id === action.data.id ? action.data : b))
  case 'CREATENEW':
    return state.concat(action.data)
  default:
    return state
  }
}

export const initBlogs = () => {
  return async dispatch => {
    const allBlogs = await blogservice.getAll()
    dispatch({
      type: 'INITIALISE',
      data: allBlogs
    })
  }
}

export const addBlog = (author, title, url) => {
  return async dispatch => {
    const blogToBeAdded = {
      author,
      title,
      url
    }
    const newBlog = await blogservice.create(blogToBeAdded)
    dispatch({
      type: 'CREATENEW',
      data: newBlog
    })
  }
}

export const likeBlog = id => {
  return async dispatch => {
    const blogToBeLiked = await blogservice.getOne(id)
    const likedBlog = { ...blogToBeLiked, likes: blogToBeLiked.likes + 1 }
    const updatedBlog = await blogservice.update(id, likedBlog)
    dispatch({
      type: 'LIKE',
      data: updatedBlog
    })
  }
}

export default reducer
