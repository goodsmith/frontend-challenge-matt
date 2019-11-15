import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import ThemeController from '_molecules/theme-controller'

import styles from './styles.css'

const TopBar = ({ onToggle, theme }) => (
  <header className={classnames(styles.topBar, styles[theme])}>
    <div className={styles.topBarContainer}>
      <h1>Where in the world?</h1>
      <ThemeController value={theme} onClick={onToggle} />
    </div>
  </header>
)

TopBar.propTypes = {
  onToggle: PropTypes.func.isRequired,
  theme: PropTypes.oneOf(['light', 'dark']),
}

TopBar.defaultProps = {
  theme: 'light',
}
export default TopBar
