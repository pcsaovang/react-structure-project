import React from 'react'
import { storiesOf, addDecorator } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { linkTo } from '@storybook/addon-links'
import './style.css'

addDecorator(withInfo)

storiesOf('UIKit', module)
  .add('Welcome', () => <Welcome showApp={linkTo('Button')} />)
