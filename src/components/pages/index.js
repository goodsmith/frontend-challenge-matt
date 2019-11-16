import React, { useState } from 'react'

import TopBar from '_organisms/top-bar'
import MainPage from '_pages/main-page'
import { setTheme, getTheme } from '_utils/store'
import { ThemeContext } from '_context'

const App = () => {
  const [themeState, setThemeState] = useState(getTheme())

  const onToggle = () => {
    const newTheme = themeState === 'dark' ? 'light' : 'dark'

    setThemeState(newTheme)
    setTheme(newTheme)
  }

  return (
    <ThemeContext.Provider value={themeState}>
      <TopBar theme={themeState} onToggle={onToggle} />
      <MainPage theme={themeState} />
    </ThemeContext.Provider>
  )
}

export default App
