import anecdoteService from '../services/anecdotes'

const reducer = (state = [] , action) => {
  switch (action.type) {
    case 'VOTE':
      const id = action.data.id
      return state.map(a => a.id === id ? action.data : a)
    case 'ADDNEW':
      return state.concat(action.data)
    case 'INIT_ANECDOTES':
      return action.data
    default: return state
  }
}

export const initializeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    dispatch({
      type: 'INIT_ANECDOTES',
      data: anecdotes
    })
  }
}

export const createContent = content => {
  return async dispatch => { 
    const newAnecdote = await anecdoteService.createNew(content)
    dispatch({
      type: 'ADDNEW', 
      data: newAnecdote
    })
  }
}

export const voteContent = id => {

  return async dispatch => {
    const anecdoteToVote = await anecdoteService.getOne(id)
    const votedAnecdote = {...anecdoteToVote, votes: anecdoteToVote.votes + 1}
    const updatedAnecdote = await anecdoteService.update(id, votedAnecdote)
    dispatch({ 
      type: 'VOTE', 
      data: updatedAnecdote
    })
  }
  
  
}

export default reducer