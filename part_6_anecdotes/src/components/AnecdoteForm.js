import React from 'react'
import { connect } from 'react-redux'
import { createContent } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'

const AnecdoteForm = props => {  
  const addAnecdote = async event => {
    event.preventDefault()
    const content = event.target.anecdote.value
    event.target.anecdote.value = ''
    props.createContent(content)
    props.setNotification(`Anecdote '${content}' added.`)
  }
  
  return (
    <div>
      <h2>Add new</h2>
      <form onSubmit={addAnecdote}>
        <div><input name='anecdote' /></div>
        <button type='submit'>Add</button>
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