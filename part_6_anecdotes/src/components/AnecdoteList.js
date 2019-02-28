import React from 'react'
import { connect } from 'react-redux'
import { voteContent } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'

const AnecdoteList = props => {
  const anecdotes = props.anecdotes

  const filter = props.filter

  const vote = id => {
    props.voteContent(id)
    const notice = `You voted for '${anecdotes.find(a => a.id === id).content}'`
    props.setNotification(notice, 5000)
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

const mapStateToProps = (state) => {
  return {
    anecdotes: state.anecdotes,
    filter: state.filter
  }
}

const mapDispatchToProps = {
  voteContent,
  setNotification
}
const ConnectedAnecdoteList = connect(
  mapStateToProps,
  mapDispatchToProps
)(AnecdoteList)

export default ConnectedAnecdoteList
