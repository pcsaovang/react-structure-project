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
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS: {
      return {
        ...state,
        token: action.payload.token,
        user: action.payload.user,
      }
    }
    case LOGIN_FAILURE: {
      return {
        ...state,
        error: action.payload,
      }
    }
    case REGISTER_FAILURE: {
      return {
        ...state,
        error: action.payload,
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
