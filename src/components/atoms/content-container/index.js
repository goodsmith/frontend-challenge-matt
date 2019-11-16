import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import styles from './styles.css'

const Container = ({ className, children }) => (
  <section className={classnames(styles.container, className)}>{children}</section>
)

Container.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
}

Container.defaultProps = {
  className: undefined,
}

export default Container
