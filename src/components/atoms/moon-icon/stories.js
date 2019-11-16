import React from 'react'
import { storiesOf } from '@storybook/react'

import CenterContainer from '_atoms/sb-center-container'
import styleVars from '_styles/css-variables'

import MoonIcon from './index'

storiesOf('atoms/moon-icon', module).add('default', () => (
  <CenterContainer style={{ backgroundColor: styleVars['light-mode-background'] }}>
    <MoonIcon />
  </CenterContainer>
))
