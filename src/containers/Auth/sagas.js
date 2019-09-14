import { call, put, takeLatest } from 'redux-saga/effects'
import { push } from 'connected-react-router'
import { LOGIN, LOGOUT, REGISTER, ENDPOINT } from './constants'
import { loginSuccess, loginFailure, registerSuccess } from './actions'
import toastify from '../../utils/toastify'
import { sendRequest } from '../../utils/helpers'

function* handleLogin() {
  yield takeLatest(LOGIN, function* _handleLogin(action) {
    try {
      const res = yield call(sendRequest, `${ENDPOINT}/login`, {
        method: 'POST',
        data: action.payload
      })
      yield put(loginSuccess(res.data))
      yield put(push('/'))
    } catch (error) {
      yield put(loginFailure(error))
    }
  })
}

function* handleRegister() {
  yield takeLatest(REGISTER, function* _handleRegister(action) {
    try {
      const res = yield call(sendRequest, '/register', { params: action.payload })
      yield put(registerSuccess(res.data))
      yield put(push('/login'))
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
