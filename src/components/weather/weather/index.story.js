import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import Weather from '.'

storiesOf('Weather', module)
  .add('30°', () => <Weather temperature="30" desc="Sunny" icon="800"></Weather>)
