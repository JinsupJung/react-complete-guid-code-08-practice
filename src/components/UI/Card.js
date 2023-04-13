import React from 'react'

import './Card.css';

function Card (props) {
    const classes="card "+props.className;  // 1칸 떼고
  return (
    <div className={classes}>{props.children}</div>
  )
}

export default Card