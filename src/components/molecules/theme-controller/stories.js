import React from 'react'
import { storiesOf } from '@storybook/react'

import CenterContainer from '_atoms/sb-center-container'
import styleVars from '_styles/css-variables'

import ThemeController from './index'

storiesOf('molecules/theme-controller', module)
  .add('default', () => (
    <CenterContainer>
      <ThemeController />
    </CenterContainer>
  ))
  .add('dark', () => (
    <CenterContainer
      style={{
        backgroundColor: styleVars['dark-mode-background'],
        color: styleVars['dark-mode-text'],
      }}
    >
      <ThemeController value="dark" />
    </CenterContainer>
  ))
