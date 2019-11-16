import React from 'react'
import { storiesOf } from '@storybook/react'

import CenterContainer from '_atoms/sb-center-container'
import styleVars from '_styles/css-variables'
import { continentList } from '_utils'

import Dropdown from './index'

storiesOf('molecules/dropdown', module)
  .add('default', () => (
    <CenterContainer style={{ backgroundColor: styleVars['light-mode-background'] }}>
      <Dropdown placeholder="Filter by Region" items={continentList} />
    </CenterContainer>
  ))
  .add('dark mode', () => (
    <CenterContainer style={{ backgroundColor: styleVars['dark-mode-background'] }}>
      <Dropdown theme="dark" placeholder="Filter by Region" items={continentList} />
    </CenterContainer>
  ))
