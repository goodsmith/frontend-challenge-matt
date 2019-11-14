import React from 'react'
import PropTypes from 'prop-types'

import styles from './styles.css'

const CenterContainer = ({ children, style }) => (
  <div style={style} className={styles.centerContainer}>
    {children}
  </div>
)

CenterContainer.propTypes = {
  children: PropTypes.node.isRequired,
  style: PropTypes.instanceOf(Object),
}

CenterContainer.defaultProps = {
  style: undefined,
}

export default CenterContainer
