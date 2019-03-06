import React from 'react'
import { connect } from 'react-redux'

const Notice = props => {
  const notice = props.notice

  if (notice.message === '') {
    return null
  }
  return <div className={notice.noticeType}>{notice.message}</div>
}

const mapStateToProps = state => {
  return {
    notice: state.notice
  }
}

const mapDispatchToProps = {}

const ConnectedNotice = connect(
  mapStateToProps,
  mapDispatchToProps
)(Notice)

export default ConnectedNotice
