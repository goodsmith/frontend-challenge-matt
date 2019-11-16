import React from 'react'
import PropTypes from 'prop-types'

import { formatValue } from '_utils'

import styles from './styles.css'

const ValueDisplay = ({ property, value }) =>
  value && (
    <h3 className={styles.display}>
      <span>{property}:</span> {formatValue(value)}
    </h3>
  )

ValueDisplay.propTypes = {
  property: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
}

ValueDisplay.defaultProps = {}
export default ValueDisplay
