import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import styles from './styles.css'

const ArrowIcon = ({ dark }) => (
  <div className={classnames(styles.arrowIcon, { [styles.dark]: dark })} />
)

ArrowIcon.propTypes = {
  dark: PropTypes.bool,
}

ArrowIcon.defaultProps = {
  dark: false,
}

export default ArrowIcon
