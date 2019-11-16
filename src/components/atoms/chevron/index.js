import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import styles from './styles.css'

const Chevron = ({ theme }) => <div className={classnames(styles.chevronIcon, styles[theme])} />

Chevron.propTypes = {
  theme: PropTypes.oneOf(['light', 'dark']),
}

Chevron.defaultProps = {
  theme: 'light',
}

export default Chevron
