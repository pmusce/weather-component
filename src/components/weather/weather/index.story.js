import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import Weather from '.'

storiesOf('Weather', module)
  .add('Sunny', () => <Weather></Weather>)
