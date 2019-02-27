import React from 'react'

const Notification = (props) => {
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }

  const state = props.store.getState().notification

  if(state === null) {
    return null
  }
  return (
    <div style={style}>
      {state}
    </div>
  )
}

export default Notification
