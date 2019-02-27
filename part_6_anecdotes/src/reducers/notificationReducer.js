const reducer = (state = 'init', action) => {
  console.log('state now: ', state)
  console.log('action ', action)

  switch (action.type) {
    case 'NEWNOTICE':
      return action.data.content
    case 'CLEARNOTICE':
      return null
    default:
      return state
  }
}

export const setNotification = (content, milliseconds) => {  
  return (dispatch) => {
    dispatch({
      type: 'NEWNOTICE',
      data: {
        content: content
      }
    })
    setTimeout((dispatch) => {
      dispatch({type: 'CLEARNOTICE'})
    }, milliseconds)
  }
}

export const clearNotification = () => {
  return {
    type: 'CLEARNOTICE'
  }
}

export default reducer