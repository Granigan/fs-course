import React from 'react';
import "../index.css";

const Notice = ({ message, type }) => {
  if(message === null) {
    return null;
  }
  return (
    <div className={type}>
      {message}
    </div>
  )
}

export default Notice;