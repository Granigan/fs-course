const reducer = (state = null, action) => {
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

export const setNotification = (content) => {  
    return {
      type: 'NEWNOTICE',
      data: {
        content: content
      }
  }
}

export const clearNotification = () => {
  return {
    type: 'CLEARNOTICE'
  }
}

export default reducer