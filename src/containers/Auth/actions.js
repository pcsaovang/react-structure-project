import * as type from './constants'

export const login = payload => ({
  type: type.LOGIN,
  payload
})

export const loginSuccess = payload => ({
  type: type.LOGIN_SUCCESS,
  payload
})

export const loginFailure = error => ({
  type: type.LOGIN_FAILURE,
  error
})

export const register = payload => ({
  type: type.REGISTER,
  payload
})

export const registerSuccess = payload => ({
  type: type.REGISTER_SUCCESS,
  payload
})

export const registerFailure = error => ({
  type: type.REGISTER_FAILURE,
  error
})

export const logout = () => ({
  type: type.LOGOUT
})
