import React from 'react'
import PropTypes from 'prop-types'
import Radium from 'radium'
import Checkbox from './Checkbox'

const Todo = ({ onClick, completed, text }) => {

  return (
    <li onClick={onClick} style={[styles.li, styles.completed[completed]]} >
      <Checkbox checked={completed} /><div>{text}</div>
    </li>
  )
}

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

var styles = {
  li: {
    display: 'flex',
    fontFamily: 'sans-serif',

  },
  completed: {
    true: {
      color: 'grey',
      textDecoration: 'line-through',
    },
    false: { textDecoration: 'none' },
  }
}

export default Radium(Todo)
