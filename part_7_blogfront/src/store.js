import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import noticeReducer from './reducers/noticeReducer'

const reducer = combineReducers({
  notice: noticeReducer
})

const store = createStore(reducer, applyMiddleware(thunk))

export default store
