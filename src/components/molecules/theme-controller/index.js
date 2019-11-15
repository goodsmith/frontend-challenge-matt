import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import Button, { types } from '_atoms/button'
import MoonIcon from '_atoms/moon-icon'
import SunIcon from '_atoms/sun-icon'

import styles from './styles.css'

const ThemeController = ({ onClick, value }) => (
  <Button
    type={types.clean}
    className={classnames(styles.themeController, styles[value])}
    onClick={onClick}
  >
    <div className={styles.controllerWrapper}>
      {value === 'light' ? (
        <>
          <MoonIcon />
          <p>Dark Mode</p>
        </>
      ) : (
        <>
          <SunIcon />
          <p>Light Mode</p>
        </>
      )}
    </div>
  </Button>
)

ThemeController.propTypes = {
  onClick: PropTypes.func.isRequired,
  value: PropTypes.oneOf(['light', 'dark']),
}

ThemeController.defaultProps = {
  value: 'light',
}
export default ThemeController
