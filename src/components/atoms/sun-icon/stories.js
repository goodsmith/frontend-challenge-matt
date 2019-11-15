import React from 'react'
import { storiesOf } from '@storybook/react'

import CenterContainer from '_atoms/sb-center-container'
import styleVars from '_styles/css-variables'

import SunIcon from './index'

storiesOf('atoms/sun-icon', module).add('dark mode', () => (
  <CenterContainer style={{ backgroundColor: styleVars['dark-mode-background'] }}>
    <SunIcon />
  </CenterContainer>
))
