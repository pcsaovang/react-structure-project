import { fork, all } from 'redux-saga/effects'

import authSaga from './containers/Auth/sagas'
import coursesSaga from './containers/Home/sagas'

const sagas = [
  ...authSaga,
  ...coursesSaga
]

function* globalSagas() {
  const globalSagasForks = sagas.map(saga => fork(saga))

  yield all(globalSagasForks)
}

export default globalSagas
