import React from 'react'
import { storiesOf } from '@storybook/react'

import CenterContainer from '_atoms/sb-center-container'
import styleVars from '_styles/css-variables'

import Button, { types } from './index'

storiesOf('atoms/button', module)
  .add('Light Mode', () => (
    <CenterContainer style={{ backgroundColor: styleVars['light-mode-background'] }}>
      <Button type={types.light}>
        <p>Light Mode</p>
      </Button>
    </CenterContainer>
  ))
  .add('Dark Mode', () => (
    <CenterContainer style={{ backgroundColor: styleVars['dark-mode-background'] }}>
      <Button type={types.dark}>
        <p>Dark Mode</p>
      </Button>
    </CenterContainer>
  ))
  .add('Clean', () => (
    <CenterContainer>
      <Button type={types.clean}>
        <p>Clean Button</p>
      </Button>
    </CenterContainer>
  ))
