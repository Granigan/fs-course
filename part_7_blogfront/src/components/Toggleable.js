import React, { useState, useImperativeHandle } from 'react'
import PropTypes from 'prop-types'

const Toggleable = React.forwardRef((props, ref) => {
  const [Visible, setVisible] = useState(false)

  const hideWhenVisible = { display: Visible ? 'none' : '' }
  const showWhenVisible = { display: Visible ? '' : 'none' }

  const toggleVisibility = () => {
    setVisible(!Visible)
  }

  useImperativeHandle(ref, () => {
    return {
      toggleVisibility
    }
  })

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
})

Toggleable.propTypes = {
  buttonLabel: PropTypes.string.isRequired
}

export default Toggleable
