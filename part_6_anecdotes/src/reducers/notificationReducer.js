const reducer = (state = 'initial message', action) => {
  console.log('state now: ', state)
  console.log('action ', action)

  switch (action.type) {
    case 'NEWNOTICE':
      return action.content
    default:
      return state
  }
  
}

export const setNotification = content => {
  return {
    type: 'NEWNOTICE',
    data: {
      content: content
    }
  }
}

export default reducer