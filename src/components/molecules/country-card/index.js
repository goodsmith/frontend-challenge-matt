import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import Card from '_atoms/card'
import Hero from '_atoms/hero'
import ValueDisplay from '_atoms/value-display'

import styles from './styles.css'

const CountryCard = ({ population, name, flag, capital, region, alpha2Code, className, theme }) => (
  <Card className={classnames(className, styles[theme])} href={`/detail/${alpha2Code}`}>
    <Hero src={flag} alt={`Flag of ${name}`} />
    <div className={classnames(styles.contentWrapper)}>
      <h2>{name}</h2>
      <div className={styles.dataWrapper}>
        <ValueDisplay property="Population" value={population} />
        <ValueDisplay property="Capital" value={capital} />
        <ValueDisplay property="Region" value={region} />
      </div>
    </div>
  </Card>
)

CountryCard.propTypes = {
  population: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  capital: PropTypes.string.isRequired,
  region: PropTypes.string.isRequired,
  alpha2Code: PropTypes.string.isRequired,
  className: PropTypes.string,
  theme: PropTypes.oneOf(['light', 'dark']),
}

CountryCard.defaultProps = {
  className: undefined,
  theme: 'light',
}

export default CountryCard
