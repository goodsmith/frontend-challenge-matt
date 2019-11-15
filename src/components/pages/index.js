import React, { useState } from 'react'
import classnames from 'classnames'

import CardList from '_organisms/card-list'
import TobBar from '_organisms/top-bar'
import { ThemeContext } from '_context'
import { getTheme, setTheme } from '_utils/store'

import styles from './styles.css'

const App = () => {
  const [themeState, setThemeState] = useState(getTheme())

  const onToggle = () => {
    const newTheme = themeState === 'dark' ? 'light' : 'dark'

    setThemeState(newTheme)
    setTheme(newTheme)
  }

  return (
    <ThemeContext.Provider value={themeState}>
      <TobBar theme={themeState} onToggle={onToggle} />
      <section className={classnames(styles.witwContainer, styles[themeState])}>
        <CardList />
      </section>
    </ThemeContext.Provider>
  )
}

export default App
