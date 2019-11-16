import React, { useState } from 'react'

import MainContainer from '_atoms/main-container'
import Container from '_atoms/content-container'
import SearchInput from '_molecules/search-input'
import Dropdown from '_molecules/dropdown'
import CardList from '_organisms/card-list'
import { continentList } from '_utils'
import { ThemeContext } from '_context'

import styles from './styles.css'

const MainPage = () => {
  const [search, setSearch] = useState(undefined)
  const [region, setRegion] = useState(undefined)

  const onChangeSearch = ({ target: { value } }) => setSearch(value)

  return (
    <ThemeContext.Consumer>
      {theme => (
        <MainContainer theme={theme}>
          <Container className={styles.filtersContainer}>
            <SearchInput
              placeholder="Search for a country..."
              onChange={onChangeSearch}
              value={search}
              theme={theme}
            />
            <Dropdown
              onChange={setRegion}
              placeholder="Filter by Region"
              value={region}
              items={continentList}
              theme={theme}
            />
          </Container>
          <Container className={styles.cardListContainer}>
            <CardList search={search} region={region} />
          </Container>
        </MainContainer>
      )}
    </ThemeContext.Consumer>
  )
}

export default MainPage
