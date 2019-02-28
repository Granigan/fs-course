import React from 'react'
import { connect } from 'react-redux'
import { createContent } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'

const AnecdoteForm = props => {  
  const addAnecdote = event => {
    event.preventDefault()
    props.createContent(event.target.anecdote.value)
    event.target.anecdote.value = ''
    props.setNotification(`Anecdote '${event.target.anecdote.value}' added.`)
  }
  
  return (
    <div>
      <h2>create new</h2>
      <form onSubmit={addAnecdote}>
        <div><input name='anecdote' /></div>
        <button type='submit'>create</button>
      </form> 
    </div>
  )}

const mapStateToProps = (state) => {
  return {

  }
}

const mapDispatchToProps = {
  createContent,
  setNotification
}

const ConnectedAnecdoteForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(AnecdoteForm)

export default ConnectedAnecdoteForm