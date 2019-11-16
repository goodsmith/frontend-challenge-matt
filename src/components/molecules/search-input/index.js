import React from 'react'
import classnames from 'classnames'

import SearchIcon from '_atoms/search-icon'

import styles from './styles.css'

const SearchInput = ({ placeholder, value, onChange, theme }) => (
  <div className={classnames(styles.inputWrapper, styles[theme])}>
    <SearchIcon dark={theme === 'dark'} />
    <input
      placeholder={placeholder}
      className={styles.searchInput}
      type="text"
      onChange={onChange}
      value={value}
      onFocus={({ target }) => {
        target.select()
      }}
    />
  </div>
)

export default SearchInput
