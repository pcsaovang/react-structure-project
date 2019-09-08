import { SET_ACTIVE_BREAKPOINT } from './constants'

export const setActiveBreakpoint = payload => {
  return {
    type: SET_ACTIVE_BREAKPOINT,
    payload,
  }
}
