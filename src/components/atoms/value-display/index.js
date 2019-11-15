import React from 'react'
import PropTypes from 'prop-types'

import styles from './styles.css'

const ValueDisplay = ({ property, value }) => (
  <h3 className={styles.display}>
    <span>{property}:</span> {value}
  </h3>
)

ValueDisplay.propTypes = {
  property: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
}

ValueDisplay.defaultProps = {}
export default ValueDisplay
