import React from 'react'
import { storiesOf } from '@storybook/react'

import CenterContainer from '_atoms/sb-center-container'

import TopBar from './index'

storiesOf('organisms/top-bar', module)
  .add('default', () => (
    <CenterContainer style={{ alignItems: 'flex-start' }}>
      <TopBar />
    </CenterContainer>
  ))
  .add('dark', () => (
    <CenterContainer style={{ alignItems: 'flex-start' }}>
      <TopBar theme="dark" />
    </CenterContainer>
  ))
