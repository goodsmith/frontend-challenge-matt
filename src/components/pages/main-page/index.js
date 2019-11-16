import React, { useState } from 'react'
import classnames from 'classnames'

import SearchInput from '_molecules/search-input'
import Dropdown from '_molecules/dropdown'
import CardList from '_organisms/card-list'
import { continentList } from '_utils'

import styles from './styles.css'

const MainPage = ({ theme }) => {
  const [search, setSearch] = useState(undefined)
  const [region, setRegion] = useState(undefined)

  const onChangeSearch = ({ target: { value } }) => setSearch(value)

  return (
    <main className={classnames(styles.witwContainer, styles[theme])}>
      <section className={styles.filtersContainer}>
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
      </section>
      <section className={styles.cardListContainer}>
        <CardList search={search} region={region} />
      </section>
    </main>
  )
}

export default MainPage
