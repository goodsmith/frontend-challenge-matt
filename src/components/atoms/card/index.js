import React from 'react'
import PropTypes from 'prop-types'

import Button, { types } from '_atoms/button'

import styles from './styles.css'

const Card = ({ children, onClick, href }) => {
  if (onClick) {
    return (
      <Button type={types.clean} onClick={onClick} href={href}>
        <div className={styles.card}>{children}</div>
      </Button>
    )
  }
  return <div className={styles.card}>{children}</div>
}

Card.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Card
