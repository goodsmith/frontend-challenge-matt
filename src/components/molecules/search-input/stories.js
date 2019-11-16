import React from 'react'
import { storiesOf } from '@storybook/react'

import CenterContainer from '_atoms/sb-center-container'
import styleVars from '_styles/css-variables'

import SearchInput from './index'

storiesOf('molecules/search-input', module)
  .add('default', () => (
    <CenterContainer style={{ backgroundColor: styleVars['light-mode-background'] }}>
      <SearchInput placeholder="Your text here..." />
    </CenterContainer>
  ))
  .add('dark mode', () => (
    <CenterContainer style={{ backgroundColor: styleVars['dark-mode-background'] }}>
      <SearchInput theme="dark" placeholder="Your text here..." />
    </CenterContainer>
  ))
