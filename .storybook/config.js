import { configure } from '@storybook/react'
import '_styles/base.css'

configure(require.context('../src/components', true, /stories\.js$/), module)
