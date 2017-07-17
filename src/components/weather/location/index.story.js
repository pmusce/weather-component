import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import Location from '.'

storiesOf('Location', module)
  .add('without time', () => <Location>Bologna</Location>)
  .add('with time', () => <Location time={new Date()}>Bologna</Location>)
