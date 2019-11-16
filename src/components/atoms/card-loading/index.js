import React from 'react'
import classnames from 'classnames'

import Card from '_atoms/card'

import styles from './styles.css'

const CardLoading = ({ dark }) => (
  <Card className={classnames(styles.loading, { [styles.dark]: dark })} />
)

export default CardLoading
