const reducer = (state = null, action) => {
  switch (action.type) {
    case 'NEWNOTICE':
      return action.data
    case 'CLEARNOTICE':
      return null
    default:
      return state
  }
}

export const setNotification = (content, seconds) => {  
  return dispatch => {
    dispatch({
      type: 'NEWNOTICE',
      data: content
    }) 
    setTimeout(() => {
      return dispatch({
        type: 'CLEARNOTICE'
      })
    }, seconds*1000)
  }
}

export const clearNotification = () => {
  return {
    type: 'CLEARNOTICE'
  }
}

export default reducer