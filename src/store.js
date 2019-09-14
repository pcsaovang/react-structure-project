import { createStore, applyMiddleware, compose } from 'redux'
import { routerMiddleware } from 'connected-react-router'
import { createBrowserHistory } from 'history'
import createSagaMiddleware from 'redux-saga'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2'

import { onApiUnauthenticated, onAuthSuccess, checkAuthOnRehydrate } from './middleware/auth'
import rootReducer from './reducer'
import rootSaga from './saga'

export const history = createBrowserHistory()

const initialState = {}
const enhancers = []
const sagaMiddleware = createSagaMiddleware()
const middleware = [
  routerMiddleware(history),
  sagaMiddleware,
  onApiUnauthenticated,
  onAuthSuccess,
  checkAuthOnRehydrate
]
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth'],
  stateReconciler: autoMergeLevel2
}

if (process.env.NODE_ENV === 'development') {
  const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension())
  }
}

const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers,
)

const store = createStore(
  persistReducer(persistConfig, rootReducer(history)),
  initialState,
  composedEnhancers,
)

export const persistor = persistStore(store)

sagaMiddleware.run(rootSaga)

export default store