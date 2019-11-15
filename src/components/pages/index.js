import React, { useState } from 'react'

import TobBar from '_organisms/top-bar'
import { ThemeContext } from '_context'
import { getTheme, setTheme } from '_utils/store'

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
    </ThemeContext.Provider>
  )
}

export default App
