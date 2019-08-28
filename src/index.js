import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import App from './App'
import store from './store'
import * as serviceWorker from './serviceWorker'
import './index.css'

dayjs.extend(relativeTime)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
)

serviceWorker.unregister()
