import React from 'react'
import { storiesOf } from '@storybook/react'

import CenterContainer from '_atoms/sb-center-container'
import Hero from '_atoms/hero'

import Card from './index'

storiesOf('atoms/card', module)
  .add('Default', () => (
    <CenterContainer>
      <Card>
        <p style={{ textAlign: 'center', marginTop: 20 }}>Default Card</p>
      </Card>
    </CenterContainer>
  ))
  .add('With Hero', () => (
    <CenterContainer>
      <Card>
        <Hero src="https://restcountries.eu/data/bra.svg" alt="Brazillian Flag" />
      </Card>
    </CenterContainer>
  ))
  .add('Button with Hero', () => (
    <CenterContainer>
      <Card onClick={() => {}}>
        <Hero src="https://restcountries.eu/data/bra.svg" alt="Brazillian Flag" />
      </Card>
    </CenterContainer>
  ))
