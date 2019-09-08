import {
  LOGIN_FAILURE,
  LOGIN_SUCCESS,
  REGISTER_FAILURE,
  LOGOUT,
} from './constants'

const initialState = {
  token: {},
  user: {},
  isFetching: false,
  error: {status: false, message: null}
}

const reducer = (state = initialState, action) => {
  const { payload, error, type } = action

  switch (type) {
    case LOGIN_SUCCESS: {
      return {
        ...state,
        token: payload.token,
        user: payload.user,
      }
    }
    case LOGIN_FAILURE: {
      return {
        ...state,
        error: {status: true, message: error},
      }
    }
    case REGISTER_FAILURE: {
      return {
        ...state,
        error: {status: true, message: error},
      }
    }
    case LOGOUT: {
      return initialState
    }
    default:
      return state
  }
}

export default reducer
