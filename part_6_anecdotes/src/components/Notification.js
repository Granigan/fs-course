import React from 'react'
import { connect } from 'react-redux'

const Notification = (props) => {
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }

  const state = props.notification

  if(state === null) {
    return null
  }
  return (
    <div style={style}>
      {state}
    </div>
  )
}

const mapStateToProps = state => {
  return {
    notification: state.notification
  }
}

const mapDispatchToProps = {}

const ConnectedNotification = connect(
  mapStateToProps,
  mapDispatchToProps
)(Notification)

export default ConnectedNotification
