import React from 'react'
import axios from 'axios'
import { Translation } from 'react-i18next'

function loading() {
  return <div className="animated fadeIn pt-3 text-center">Loading</div>
}

function Trans({ text, ns = 'translation', ...rest }) {
  return <Translation ns={ns}>{t => t(text, { ...rest })}</Translation>
}

function toSlug(str) {
  // Convert all to lower case
  if (!str) {
    return ''
  }

  let result = str.toLowerCase()

  // delete accents
  result = result.replace(/(à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ)/g, 'a')
  result = result.replace(/(è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ)/g, 'e')
  result = result.replace(/(ì|í|ị|ỉ|ĩ)/g, 'i')
  result = result.replace(/(ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ)/g, 'o')
  result = result.replace(/(ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ)/g, 'u')
  result = result.replace(/(ỳ|ý|ỵ|ỷ|ỹ)/g, 'y')
  result = result.replace(/(đ)/g, 'd')

  // Delete special characters
  result = result.replace(/([^0-9a-z-\s])/g, '')

  // Remove spaces instead of characters -
  result = result.replace(/(\s+)/g, '-')

  // Delete the projections - at the top
  result = result.replace(/^-+/g, '')

  // delete remainder - at the end
  result = result.replace(/-+$/g, '')

  return result
}

/**
 * Checks if a network request came back fine, and throws an error if not
 *
 * @param  {object} response   A response from a network request
 * @return {object|undefined} Returns either the response, or throws an error
 */
function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response
  }

  const error = new Error(response.statusText)
  error.response = response
  throw error
}

/**
 * Requests a URL, returning a promise
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to axios
 * @return {object}           The response data
 */
function sendRequest(url, options) {
  return axios(url, options).then(checkStatus)
}

export { loading, toSlug, sendRequest, Trans }
