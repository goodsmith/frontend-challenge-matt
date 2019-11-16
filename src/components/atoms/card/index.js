import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import Button, { types } from '_atoms/button'

import styles from './styles.css'

const Card = ({ children, onClick, href, className }) => {
  if (onClick || href) {
    return (
      <Button type={types.clean} onClick={onClick} href={href}>
        <div className={classnames(styles.card, className)}>{children}</div>
      </Button>
    )
  }
  return <div className={classnames(styles.card, className)}>{children}</div>
}

Card.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
}

Card.defaultProps = {
  children: undefined,
  className: undefined,
}

export default Card
