import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import { reducer as formReducer } from 'redux-form'

import layoutReducer from './containers/Layout/reducer'
import authReducer from './containers/Auth/reducer'

export default history => combineReducers({
  // 3rd-party modules
  router: connectRouter(history),
  form: formReducer,

  // app reducer
  layout: layoutReducer,
  auth: authReducer
})
