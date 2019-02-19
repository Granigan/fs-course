import React, { useState } from 'react'

const Toggleable = props => {
  const [Visible, setVisible] = useState(false)

  const hideWhenVisible = { display: Visible ? 'none' : '' }
  const showWhenVisible = { display: Visible ? '' : 'none' }

  const toggleVisibility = () => {
    setVisible(!Visible)
  }

  return (
    <div>
      <div style={hideWhenVisible}>
        <button onClick={toggleVisibility}>{props.buttonLabel}</button>
      </div>
      <div style={showWhenVisible}>
        <button onClick={toggleVisibility}>Cancel</button>
        {props.children}
      </div>
    </div>
  )
}

export default Toggleable
