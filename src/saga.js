import { fork, all } from 'redux-saga/effects'

import authSaga from './containers/Auth/sagas'

const sagas = [
  ...authSaga
]

function* globalSagas() {
  const globalSagasForks = sagas.map(saga => fork(saga))

  yield all(globalSagasForks)
}

export default globalSagas
