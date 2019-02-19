import React from 'react'
import PropTypes from 'prop-types'
import Radium from 'radium'
import { FiCheckSquare, FiSquare } from 'react-icons/fi'

const Checkbox = ({ checked }) => {
  let icon = (checked) ? (<FiCheckSquare />) : (<FiSquare />)
  return (
    <div style={[styles.icon, styles[checked]]}>
      {icon}
    </div>
  )
}

Checkbox.propTypes = {
  checked: PropTypes.bool.isRequired,
}

var styles = {
  icon: {
    marginRight: '0.5rem',
  },
  true: { color: 'green' },
  false: { color: 'grey' },
}

export default Radium(Checkbox)
