const reducer = (state = { data: { message: '' } }, action) => {
  switch (action.type) {
  case 'NEWNOTICE':
    return action.data
  case 'CLEARNOTICE':
    return action.data
  default:
    return state
  }
}

export const setNotice = (message, noticeType, seconds) => {
  return dispatch => {
    dispatch({
      type: 'NEWNOTICE',
      data: {
        message,
        noticeType
      }
    })
    setTimeout(() => {
      return dispatch({
        type: 'CLEARNOTICE',
        data: {
          message: ''
        }
      })
    }, seconds * 1000)
  }
}

export const clearNotice = () => {
  return {
    type: 'CLEARNOTICE'
  }
}

export default reducer
