import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import styles from './styles.css'

export const types = {
  light: 'light',
  dark: 'dark',
  clean: 'clean',
}

const Button = ({ href, onClick, type, className, children }) => {
  if (href) {
    return (
      <a href={href} className={classnames(styles.btn, styles[type], className)}>
        {children}
      </a>
    )
  }

  return (
    <button
      type="button"
      onClick={onClick}
      className={classnames(styles.btn, styles[type], className)}
    >
      {children}
    </button>
  )
}

Button.propTypes = {
  href: PropTypes.string,
  onClick: PropTypes.func,
  type: PropTypes.oneOf(types),
  className: PropTypes.string,
  children: PropTypes.node,
}

Button.defaultProps = {
  type: types.primary,
  href: undefined,
  onClick: undefined,
  className: undefined,
  children: undefined,
}

export default Button
