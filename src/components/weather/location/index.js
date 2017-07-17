
import PropTypes from 'prop-types'
import React from 'react'

const locationStyles = {
  padding: '3px 10px',
  margin: 10,
  fontFamily: 'arial'
}

const Location = ({ children }) =>
  <h2 style={locationStyles}>
    {children}
  </h2>

Location.propTypes = {
  children: PropTypes.string.isRequired,
}

export default Location
