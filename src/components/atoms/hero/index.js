import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import styles from './styles.css'

const Hero = ({ src, alt, srcSet, className }) => (
  <img className={classnames(styles.hero, className)} alt={alt} src={src} srcSet={srcSet} />
)

Hero.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  srcSet: PropTypes.string,
  className: PropTypes.string,
}

Hero.defaultProps = {
  srcSet: undefined,
  className: undefined,
}

export default Hero
