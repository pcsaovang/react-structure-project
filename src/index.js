import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/lib/integration/react'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import App from './App'
import store, { persistor, history } from './store'
import { LANGUAGE } from './config/app'
import languageInstance from './config/language'
import axiosInstance from './config/axiosInstance'
import { loading } from './utils/helpers'
import * as serviceWorker from './serviceWorker'
import './index.css'

languageInstance({ lng: LANGUAGE })
axiosInstance(store)
dayjs.extend(relativeTime)

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={loading()} persistor={persistor}>
      <App history={history} />
    </PersistGate>
  </Provider>,
  document.getElementById('root'),
)

serviceWorker.unregister()
