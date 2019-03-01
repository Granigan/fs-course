const reducer = (state = [] , action) => {
  switch (action.type) {
    case 'VOTE':
      const id = action.data.id
      const anecdoteToVote = state.find(a => a.id === id)
      const votedAnecdote = {...anecdoteToVote, votes: anecdoteToVote.votes + 1}
      return state.map(a => a.id === id ? votedAnecdote : a).sort((a, b) => b.votes - a.votes)
    case 'ADDNEW':
      return state.concat(action.data.anecdote)
    case 'INIT_ANECDOTES':
      return action.data.anecdotes
    default: return state
  }
}

export const initializeAnecdotes = (anecdotes) => {
  return {
    type: 'INIT_ANECDOTES',
    data: {
      anecdotes: anecdotes
    }
  }
}

export const createContent = anecdote => {
  return { 
    type: 'ADDNEW', 
    data: { 
      anecdote: anecdote
    }
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