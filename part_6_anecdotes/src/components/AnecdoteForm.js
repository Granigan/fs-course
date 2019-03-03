import React from 'react'
import { createContent } from '../reducers/anecdoteReducer'
import { setNotification, clearNotification } from '../reducers/notificationReducer';


const AnecdoteForm = props => {  
  const addAnecdote = event => {
    event.preventDefault()
    props.store.dispatch(createContent(event.target.anecdote.value))
    props.store.dispatch(setNotification(`Anecdote ${event.target.anecdote.value} added.`))
    setTimeout(() => props.store.dispatch(clearNotification()), 5000)    
    event.target.anecdote.value = ''
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

export default AnecdoteForm