import { push } from 'react-router-redux'
import axios from 'axios'
import { LOGIN_SUCCESS, LOGIN_FAILURE } from '../containers/Auth/constants'

export const onApiUnauthenticated = () => next => action => {
  if (action.type === 'API_UNAUTHENTICATED') {
    return next(push('/login'))
  }

  return next(action)
}

export const onAuthSuccess = () => next => action => {
  if (action.type === LOGIN_SUCCESS) {
    const { token } = action.payload
    const { tokenType, accessToken } = token

    axios.defaults.headers.common.Authorization = `${tokenType} ${accessToken}`
  } else if (action.type === LOGIN_FAILURE) {
    delete axios.defaults.headers.Authorization
  }

  return next(action)
}