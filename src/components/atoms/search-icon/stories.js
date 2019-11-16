import React from 'react'
import { storiesOf } from '@storybook/react'

import CenterContainer from '_atoms/sb-center-container'
import styleVars from '_styles/css-variables'

import SearchIcon from './index'

storiesOf('atoms/search-icon', module)
  .add('default', () => (
    <CenterContainer style={{ backgroundColor: styleVars['light-mode-background'] }}>
      <SearchIcon />
    </CenterContainer>
  ))
  .add('dark mode', () => (
    <CenterContainer style={{ backgroundColor: styleVars['dark-mode-background'] }}>
      <SearchIcon dark />
    </CenterContainer>
  ))
