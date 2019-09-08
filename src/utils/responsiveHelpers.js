export const breakpoints = {
  desktopLg: 1400,
  desktopMd: 1300,
  desktopSm: 1200,
  tabletLg: 1040,
  tabletMd: 991,
  tabletSm: 840,
  mobileLg: 767,
  mobileMd: 540,
  mobileSm: 400,
}

function breakpointFromString(str) {
  const breakpoint = breakpoints[str]

  if (!breakpoint) {
    throw new Error(`Bad breakpoint variable given: ${str}`)
  }

  return breakpoint
}

/**
 * Returns a string of classes that match / are adjacent to the current breakpoint
 * @param {classObj} classObj Obj containing key / value pairs for desired breakpoints
 * @param {Object} breakpoint Obj describing current breakpoint state
 * @param {string} breakpoint.name String defining current breakpoint name
 * @param {number} breakpoint.size Number defining current breakpoint size
 * @return {string} Returns class string that matches correct breakpoint
 */
export const setClass = (classObj, breakpoint) => {
  // including the 'default' key in the classObj is optional,
  // if its not provided it will be set to an empty string.
  if (classObj.default === undefined) {
    classObj.default = ''
  }

  // We do some light error handling here to throw a meaningful
  // error in the event an improper type is passed for the
  // breakpoint parameter.
  if (typeof breakpoint !== 'object') {
    throw new Error(
      `Bad breakpoint type given: ${breakpoint} ${typeof breakpoint}`,
    )
  }

  // if 'default' is the current breakpoint, we simply return
  // the class strings that pair with the default key
  if (breakpoint.name === 'default') {
    return classObj['default']
  }

  // We now compare the breakpoint.name (the currently active breakpoint)
  // against each key in the 'breakpoints' object (created in step 2), and
  // return the first matched pair.
  const sizeArray = Object.keys(breakpoints).reverse()
  const statingIndex = sizeArray.indexOf(breakpoint.name)
  const firstMatchedKey = sizeArray
    .slice(statingIndex)
    .find(key => classObj[key] || 'default')

  return classObj[firstMatchedKey]
}

/**
 * Returns a boolean indicating whether or not the currentBreakpointSize value
 * is greater than the passed breakpointToCompare value
 * @param {Object} breakpointToCompare String or number, if string, it is used to retrieve
 * the correct value from breakpoints[]
 * @param {number} currentBreakpointSize Number indicating the current breakpoint value
 * (usually breakpoint.size)
 * @return {boolean} Returns boolean that indicates whether the passed
 * breakpointToCompare string or number is currently
 * greater than the currentBreakpointSize
 */
export const breakpointIsGreaterThan = (
  breakpointToCompare,
  currentBreakpointSize,
) => {
  const comparison =
    typeof breakpointToCompare === 'string'
      ? breakpointFromString(breakpointToCompare)
      : breakpointToCompare

  return currentBreakpointSize === null || currentBreakpointSize > comparison
}

/**
 * Returns a boolean indicating whether or not the currentBreakpointSize value
 * is less than the passed breakpointToCompare value
 * @param {Object} breakpointToCompare String or number, if string, it is used to retrieve
 * the correct value from breakpoints[]
 * @param {number} currentBreakpointSize Number indicating the current breakpoint value
 * (usually breakpoint.size)
 * @return {boolean} Returns boolean that indicates whether the passed
 * breakpointToCompare string or number is currently
 * less than the currentBreakpointSize
 */
export const breakpointIsLessThan = (
  breakpointToCompare,
  currentBreakpointSize,
) => {
  const comparison =
    typeof breakpointToCompare === 'string'
      ? breakpointFromString(breakpointToCompare)
      : breakpointToCompare

  return currentBreakpointSize !== null && currentBreakpointSize <= comparison
}
