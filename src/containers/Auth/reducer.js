import {
  LOGIN_FAILURE,
  LOGIN_SUCCESS,
  REGISTER_FAILURE,
  LOGOUT,
} from './constants'

const initialState = {
  token: {
    tokenType: null,
    accessToken: null,
    expiresIn: null,
    refreshToken: null,
  },
  user: {},
  isFetching: false,
  isAuthenticated: false,
  error: {},
}

const reducer = (state = initialState, action) => {
  const { payload, error, type } = action

  switch (type) {
    case LOGIN_SUCCESS: {
      const { token, user } = payload
      return {
        ...state,
        token,
        user,
        isFetching: false,
        isAuthenticated: true,
        error,
      }
    }
    case LOGIN_FAILURE: {
      return {
        ...initialState,
        error,
      }
    }
    case REGISTER_FAILURE: {
      return {
        ...state,
        error,
      }
    }
    case LOGOUT: {
      return {
        ...initialState,
        isAuthenticated: false,
      }
    }
    default:
      return state
  }
}

export default reducer
