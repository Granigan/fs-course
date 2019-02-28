const reducer = (state = '', action) => {
  switch (action.type) {
    case 'UPDATEFILTER':
      return action.data.filter
    default: return state
  }
}

export const updateFilter = filter => {

  return {
    type: 'UPDATEFILTER',
    data: {
      filter: filter,
    }
  }
}

export default reducer