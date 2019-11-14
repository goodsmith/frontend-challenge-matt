import React from 'react'
import { storiesOf } from '@storybook/react'

import CenterContainer from '_atoms/sb-center-container'

import Hero from './index'

storiesOf('atoms/hero', module).add('Default Hero', () => (
  <CenterContainer>
    <Hero src="https://restcountries.eu/data/bra.svg" alt="Brazillian Flag" />
  </CenterContainer>
))
