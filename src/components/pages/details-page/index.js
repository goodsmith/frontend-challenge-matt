import React, { useState, useEffect } from 'react'

import Chevron from '_atoms/chevron'
import MainContainer from '_atoms/main-container'
import Container from '_atoms/content-container'
import Button, { types } from '_atoms/button'
import ValueDisplay from '_atoms/value-display'
import Hero from '_atoms/hero'
import DetailsLoadingPage from '_atoms/details-loading'
import { getCountryDetails } from '_services'
import { ThemeContext } from '_context'

import styles from './styles.css'

const DetailsPage = ({
  match: {
    params: { code },
  },
}) => {
  const [data, setData] = useState(undefined)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const getData = async () => {
      setLoading(true)
      const response = await getCountryDetails(code)
      const { borders, currencies, languages } = response.data

      const stringCurrencies = currencies.map(c => c.name).join(', ')
      const stringLanguages = languages.map(l => l.name).join(', ')

      const buttonBorders = await Promise.all(
        borders.splice(0, 3).map(async border => {
          const bordeResponse = await getCountryDetails(border, ['name'])

          return { ...bordeResponse.data, code: border }
        })
      )

      response.data.borders = buttonBorders
      response.data.currencies = stringCurrencies
      response.data.languages = stringLanguages
      setData(response.data)

      setLoading(false)
    }
    getData()
  }, [code])
  return (
    <ThemeContext.Consumer>
      {theme => (
        <MainContainer theme={theme}>
          <Container>
            <div className={styles.breadCrumbContainer}>
              <Button className={styles.breadCrumb} type={types[theme]} href="/">
                <Chevron theme={theme} /> Back
              </Button>
            </div>
            {loading ? (
              <DetailsLoadingPage theme={theme} />
            ) : (
              <div className={styles.detailContainer}>
                <Hero src={data.flag} alt={`Flag of ${data.name}`} className={styles.detailHero} />
                <h1 className={styles.title}>{data.name}</h1>
                <div className={styles.physData}>
                  <ValueDisplay property="Native Name" value={data.nativeName} />
                  <ValueDisplay property="Population" value={data.population} />
                  <ValueDisplay property="Region" value={data.region} />
                  <ValueDisplay property="Sub Region" value={data.subregion} />
                  <ValueDisplay property="Capital" value={data.capital} />
                </div>
                <div className={styles.polData}>
                  <ValueDisplay property="Top Level Domain" value={data.topLevelDomain} />
                  <ValueDisplay property="Currencies" value={data.currencies} />
                  <ValueDisplay property="Languages" value={data.languages} />
                </div>
                {data.borders.length !== 0 && (
                  <div className={styles.bordersContainer}>
                    Border Countries:{' '}
                    {data.borders.slice(0, 3).map(border => (
                      <Button
                        key={`border_${border.code}`}
                        type={types[theme]}
                        className={styles.borderButton}
                        href={border.code}
                      >
                        {border.name}
                      </Button>
                    ))}
                  </div>
                )}
              </div>
            )}
          </Container>
        </MainContainer>
      )}
    </ThemeContext.Consumer>
  )
}

export default DetailsPage
