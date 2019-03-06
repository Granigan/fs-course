import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import noticeReducer from './reducers/noticeReducer'
import blogReducer from './reducers/blogReducer'

const reducer = combineReducers({
  notice: noticeReducer,
  blog: blogReducer
})

const store = createStore(reducer, applyMiddleware(thunk))

export default store
