import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import WeatherWidget from '.'

storiesOf('WeatherWidget', module)
  .add('without time', () => <WeatherWidget></WeatherWidget>)
