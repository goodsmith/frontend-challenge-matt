import React, { useState } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import DetailsPage from '_pages/details-page'
import NotFound from '_pages/not-found'
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
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route path="/detail/:code" component={DetailsPage} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </ThemeContext.Provider>
  )
}

export default App
