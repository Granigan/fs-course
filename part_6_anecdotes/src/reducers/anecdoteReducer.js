import anecdoteService from '../services/anecdotes'

const reducer = (state = [] , action) => {
  switch (action.type) {
    case 'VOTE':
      const id = action.data.id
      const anecdoteToVote = state.find(a => a.id === id)
      const votedAnecdote = {...anecdoteToVote, votes: anecdoteToVote.votes + 1}
      return state.map(a => a.id === id ? votedAnecdote : a).sort((a, b) => b.votes - a.votes)
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
  return { 
    type: 'VOTE', 
    data: { 
      id: id 
    }  
  }
}

export default reducer