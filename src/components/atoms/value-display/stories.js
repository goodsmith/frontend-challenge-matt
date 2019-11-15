import React from 'react'
import { storiesOf } from '@storybook/react'

import CenterContainer from '_atoms/sb-center-container'

import ValueDisplay from './index'

storiesOf('atoms/value-display', module).add('default', () => (
  <CenterContainer>
    <ValueDisplay property="Population" value="220000000" />
  </CenterContainer>
))
