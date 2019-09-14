import axios from 'axios'
import { get } from 'lodash'

import { logout } from '../containers/Auth/actions'
import { API_DOMAIN } from './app'

export default function(store) {
  axios.defaults.baseURL = API_DOMAIN
  axios.defaults.headers['Cache-Control'] = 'no-cache'
  axios.defaults.headers.Pragma = 'no-cache'

  axios.interceptors.response.use(
    response => {
      return response
    },
    error => {
      if (get(error, 'response.data.code') === 401) {
        store.dispatch(logout())
      }
      return Promise.reject(error)
    },
  )
}
