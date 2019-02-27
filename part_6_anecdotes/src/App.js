import React from 'react'
import { 
  voteContent 
} from './reducers/anecdoteReducer'
import AnecdoteForm from './components/AnecdoteForm'

const App = props => {
  const store = props.store
  const anecdotes = store.getState()
  
  const vote = id => {
    store.dispatch(voteContent(id))
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
      <AnecdoteForm store={props.store} />
    </div>
  )
}

export default App
