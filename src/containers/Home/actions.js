import {
  FETCH_COURSES,
  FETCH_COURSES_SUCCESS,
  FETCH_COURSES_FAILURE,
} from './constants'

export const fetchCourses = () => ({
  type: FETCH_COURSES,
})

export const fetchCoursesSuccess = payload => ({
  type: FETCH_COURSES_SUCCESS,
  payload,
})

export const fetchCoursesFailure = error => ({
  type: FETCH_COURSES_FAILURE,
  error,
})
