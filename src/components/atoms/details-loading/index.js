import React from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'

import styles from './styles.css'

const DetailsLoading = ({ theme }) => (
  <div className={styles.detailContainer}>
    <div className={classnames(styles.hero, styles.item, styles[theme])} />
    <div className={classnames(styles.title, styles.item, styles[theme])} />
    <div className={styles.details}>
      <div className={classnames(styles.item, styles.detailItem, styles[theme])} />
      <div className={classnames(styles.item, styles.detailItem, styles[theme])} />
      <div className={classnames(styles.item, styles.detailItem, styles[theme])} />
      <div className={classnames(styles.item, styles.detailItem, styles[theme])} />
      <div className={classnames(styles.item, styles.detailItem, styles[theme])} />
    </div>
    <div className={classnames(styles.borders, styles.item, styles[theme])} />
  </div>
)

DetailsLoading.propTypes = {
  theme: PropTypes.oneOf(['light', 'dark']),
}

DetailsLoading.defaultProps = {
  theme: 'light',
}

export default DetailsLoading
