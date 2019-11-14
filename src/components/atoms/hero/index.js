import React from 'react'
import PropTypes from 'prop-types'

import styles from './styles.css'

const Hero = ({ src, alt, srcSet }) => (
  <img className={styles.hero} alt={alt} src={src} srcSet={srcSet} />
)

Hero.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  srcSet: PropTypes.string,
}

Hero.defaultProps = {
  srcSet: undefined,
}

export default Hero
