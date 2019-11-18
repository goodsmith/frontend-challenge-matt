import React, { useState, useEffect, useCallback } from 'react'

import CountryCard from '_molecules/country-card'
import CardListLoading from '_molecules/card-list-loading'
import { ThemeContext } from '_context'
import { getCardData } from '_services'

import styles from './styles.css'

const CardList = ({ search, region: filterRegion }) => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const getData = async () => {
      setLoading(true)
      const response = await getCardData()
      setLoading(false)

      setData(response.data)
    }
    getData()
  }, [])

  const getCards = useCallback(
    theme =>
      data
        .filter(
          item =>
            !(filterRegion || search) ||
            ((!filterRegion || item.region === filterRegion) &&
              (!search || item.name.toLowerCase().match(`^${search.toLowerCase()}.*`)))
        )
        .map(({ name, alpha2Code, population, capital, region, flag }) => (
          <CountryCard
            theme={theme}
            key={alpha2Code}
            className={styles.cardItem}
            name={name}
            alpha2Code={alpha2Code}
            population={population}
            capital={capital}
            region={region}
            flag={flag}
          />
        )),
    [data, filterRegion, search]
  )

  return (
    <ThemeContext.Consumer>
      {value => (
        <div className={styles.cardList}>
          {loading ? <CardListLoading dark={value === 'dark'} /> : getCards(value)}
        </div>
      )}
    </ThemeContext.Consumer>
  )
}

export default CardList
