import React from 'react'
import { connect } from 'react-redux'
import { voteContent } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'

const AnecdoteList = props => {
  const vote = id => {
    props.voteContent(id)
    const notice = `You voted for '${props.anecdotesToShow.find(a => a.id === id).content}'`
    props.setNotification(notice, 5000)
  }

  return (
    <div>
      {props.anecdotesToShow.map(anecdote =>
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

const anecdotesToShow = ({ anecdotes, filter }) => {
  return anecdotes.filter(a => a.content.includes(filter)).sort((a, b) => b.votes - a.votes)
}
const mapStateToProps = state => ({
  anecdotesToShow: anecdotesToShow(state)
})

const mapDispatchToProps = {
  voteContent,
  setNotification
}
const ConnectedAnecdoteList = connect(
  mapStateToProps,
  mapDispatchToProps
)(AnecdoteList)

export default ConnectedAnecdoteList
