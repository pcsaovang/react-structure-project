import { put, takeLatest } from 'redux-saga/effects'
import { push } from 'react-router-redux'
import axios from 'axios'
import { LOGIN, LOGOUT, REGISTER, ENDPOINT } from './constants'
import { loginSuccess, loginFailure, registerSuccess } from './actions'
import toastify from '../../utils/toastify'

function* handleLogin() {
  yield takeLatest(LOGIN, function* _handleLogin(action) {
    try {
      const res = yield axios.post(`${ENDPOINT}/login`, action.payload)
      yield put(loginSuccess(res.data))
      toastify({ msg: 'Welcome back!' })
    } catch (error) {
      yield put(loginFailure(error))
      toastify({ msg: 'Failed to login', type: 'error' })
    }
  })
}

function* handleRegister() {
  yield takeLatest(REGISTER, function* _handleRegister(action) {
    try {
      const res = yield axios.post(`${ENDPOINT}/register`, action.payload)
      yield put(registerSuccess(res.data))
      yield put(push('/login'))
      toastify({
        msg: 'Register success!',
      })
    } catch (error) {
      yield put(loginFailure(error))
      let message = 'Register error.'
      if (error.response.status === 409) {
        message =
          'Email exists. <a href="/forgot-password">Forgot password?</a>'
      }
      toastify({ msg: message, type: 'error' })
    }
  })
}

function* handleLogout() {
  yield takeLatest(LOGOUT, function* _handleLogout() {
    yield put(push('/login'))
  })
}

const sagas = [handleLogin, handleLogout, handleRegister]

export default sagas
