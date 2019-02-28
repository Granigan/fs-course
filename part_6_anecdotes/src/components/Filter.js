import React from 'react'
import { connect } from 'react-redux'
import { updateFilter } from '../reducers/filterReducer'

const Filter = (props) => {
  const changeFilter = event => {
    props.updateFilter(event.target.value)
  }

  const style = {
    marginBotton: 10
  }

  return (
    <div style={style}>
      <input name='filter' onChange={changeFilter} />
    </div>
  )
}

const mapDispatchToProps = {
  updateFilter
}

const ConnectedFilter = connect(
  null,
  mapDispatchToProps)(Filter)

export default ConnectedFilter