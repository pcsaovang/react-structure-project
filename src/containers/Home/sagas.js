import { put, call, takeLatest } from 'redux-saga/effects'
import { keyBy } from 'lodash'
import { FETCH_COURSES, COURSES_ENDPOINT } from './constants'
import { fetchCoursesSuccess, fetchCoursesFailure } from './actions'
import { sendRequest } from '../../utils/helpers'

function* handleFetchCourses() {
  yield takeLatest(FETCH_COURSES, function* _handleFetchCourses() {
    try {
      const res = yield call(sendRequest, `${COURSES_ENDPOINT}`, {})
      yield put(fetchCoursesSuccess(keyBy(res.data, '_id')))
    } catch (error) {
      yield put(fetchCoursesFailure(error))
    }
  })
}

const sagas = [handleFetchCourses]

export default sagas
