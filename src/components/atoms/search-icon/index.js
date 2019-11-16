import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import styles from './styles.css'

const SearchIcon = ({ dark }) => (
  <div className={classnames(styles.searchIcon, { [styles.dark]: dark })} />
)

SearchIcon.propTypes = {
  dark: PropTypes.bool,
}

SearchIcon.defaultProps = {
  dark: false,
}

export default SearchIcon
