import React, { useState, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import ArrowIcon from '_atoms/arrow-icon'

import styles from './styles.css'

const Dropdown = ({ onChange, value, placeholder, items, theme }) => {
  const [open, setOpen] = useState(false)

  const ref = useRef()

  const handleClickOutside = ({ target }) => {
    if (ref.current && !ref.current.contains(target)) {
      setOpen(false)
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  })

  const getItemRows = () =>
    items.map(i => (
      <li>
        <button
          type="button"
          onClick={() => {
            setOpen(false)
            onChange(i)
          }}
        >
          {i}
        </button>
      </li>
    ))

  return (
    <div ref={ref} className={styles.dropdownWrapper}>
      <button
        className={classnames(styles.dropdownHeader, styles.item, styles[theme])}
        type="button"
        onClick={() => setOpen(!open)}
      >
        <ArrowIcon dark={theme === 'dark'} />
        {value || placeholder}
      </button>
      {open && (
        <div className={classnames(styles.dropdown, styles.item, styles[theme])}>
          <ul>{getItemRows()}</ul>
        </div>
      )}
    </div>
  )
}

Dropdown.propTypes = {
  onChange: PropTypes.func.isRequired,
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  theme: PropTypes.oneOf(['light', 'dark']),
}

Dropdown.defaultProps = {
  value: undefined,
  placeholder: undefined,
  theme: 'light',
}

export default Dropdown
