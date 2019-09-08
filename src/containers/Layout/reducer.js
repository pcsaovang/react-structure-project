import { get } from 'lodash'
import { SET_ACTIVE_BREAKPOINT } from './constants'

const initialState = {
  breakpoint: {
    name: 'default',
    size: null,
  },
}

const reducer = (state = initialState, action) => {
  const breakpointName = get(action, 'payload.breakpointName', 'default')
  const breakpointSize = get(action, 'payload.breakpointSize', null)
  switch (action.type) {
    case SET_ACTIVE_BREAKPOINT: {
      return {
        ...state,
        breakpoint: {
          ...state.breakpoint,
          name: breakpointName,
          size: breakpointSize
        },
      }
    }
    default: {
      return state
    }
  }
}

export default reducer
