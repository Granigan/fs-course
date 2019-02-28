import React from 'react'
import { updateFilter } from '../reducers/filterReducer'

const Filter = (props) => {
  const changeFilter = event => {
    props.store.dispatch(updateFilter(event.target.value))
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

export default Filter