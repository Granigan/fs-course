import React from 'react'
import { 
  createContent, voteContent 
} from './reducers/anecdoteReducer'

const App = props => {
  const store = props.store
  const anecdotes = store.getState()
  
  const vote = id => {
    store.dispatch(voteContent(id))
  }

  const addAnecdote = event => {
    event.preventDefault()
    store.dispatch(createContent(event.target.anecdote.value))
    event.target.anecdote.value = ''
  }
  
  return (
    <div>
      <h2>Anecdotes</h2>
      {anecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id)}>vote</button>
          </div>
        </div>
      )}
      <h2>create new</h2>
      <form onSubmit={addAnecdote}>
        <div><input name='anecdote' /></div>
        <button type='submit'>create</button>
      </form>
    </div>
  )
}

export default App
