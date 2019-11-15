import React, { useState, useEffect } from 'react'

import CountryCard from '_molecules/country-card'
import { ThemeContext } from '_context'
import { getCardData } from '_services'

import styles from './styles.css'

const CardList = () => {
  const [data, setData] = useState([])
  useEffect(() => {
    const getData = async () => {
      const response = await getCardData()

      setData(response.data)
    }
    getData()
  }, [])

  const getCards = theme =>
    data.map(({ name, alpha2Code, population, capital, region, flag }) => (
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
    ))

  return (
    <ThemeContext.Consumer>
      {value => <div className={styles.cardList}>{getCards(value)}</div>}
    </ThemeContext.Consumer>
  )
}

export default CardList
