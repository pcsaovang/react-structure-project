import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { reducer as formReducer } from 'redux-form'

import layoutReducer from './containers/Layout/reducer'
import authReducer from './containers/Auth/reducer'

export default combineReducers({
  // 3rd-party modules
  router: routerReducer,
  form: formReducer,

  // app reducer
  layout: layoutReducer,
  auth: authReducer
})
