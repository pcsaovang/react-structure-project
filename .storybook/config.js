import { configure } from '@storybook/react'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'

dayjs.extend(relativeTime)

function loadStories() {
  require('../src/stories')
}

configure(loadStories, module)
