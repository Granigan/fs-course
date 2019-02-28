import React from 'react'
import { voteContent } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'

const AnecdoteList = props => {
  const anecdotes = props.store.getState().anecdotes

  const filter = props.store.getState().filter

  const vote = id => {
    props.store.dispatch(voteContent(id))
    const notice = `You voted for '${anecdotes.find(a => a.id === id).content}'`
    props.store.dispatch(setNotification(notice, 5000))
  }

  return (
    <div>
      {anecdotes.filter(a => a.content.includes(filter)).map(anecdote =>
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
    </div>
  )
}

export default AnecdoteList
