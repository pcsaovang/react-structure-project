import {
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  REGISTER,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  LOGOUT,
} from './constants'

export const login = payload => ({
  type: LOGIN,
  payload,
})

export const loginSuccess = payload => ({
  type: LOGIN_SUCCESS,
  payload,
})

export const loginFailure = error => ({
  type: LOGIN_FAILURE,
  error,
})

export const register = payload => ({
  type: REGISTER,
  payload,
})

export const registerSuccess = payload => ({
  type: REGISTER_SUCCESS,
  payload,
})

export const registerFailure = error => ({
  type: REGISTER_FAILURE,
  error,
})

export const logout = () => ({
  type: LOGOUT,
})
