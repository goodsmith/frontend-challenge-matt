import React from 'react'
import { storiesOf } from '@storybook/react'

import CenterContainer from '_atoms/sb-center-container'
import styleVars from '_styles/css-variables'

import ArrowIcon from './index'

storiesOf('atoms/arrow-icon', module)
  .add('default', () => (
    <CenterContainer style={{ backgroundColor: styleVars['light-mode-background'] }}>
      <ArrowIcon />
    </CenterContainer>
  ))
  .add('dark mode', () => (
    <CenterContainer style={{ backgroundColor: styleVars['dark-mode-background'] }}>
      <ArrowIcon dark />
    </CenterContainer>
  ))
