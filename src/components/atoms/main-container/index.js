import React from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'

import styles from './styles.css'

const MainContainer = ({ theme, children }) => (
  <main className={classnames(styles.witwContainer, styles[theme])}>{children}</main>
)

MainContainer.propTypes = {
  children: PropTypes.node.isRequired,
  theme: PropTypes.oneOf(['light', 'dark']),
}

MainContainer.defaultProps = {
  theme: 'light',
}

export default MainContainer
