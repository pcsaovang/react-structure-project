import React from 'react'
import { breakpoints } from '../../utils/responsiveHelpers'
import { setActiveBreakpoint } from '../../containers/Layout/actions'

class AppWrapper extends React.Component {
  constructor(props) {
    super(props)

    // initialize an empty array for collecting the current
    // state of our media queries. This will be pushed into
    // the store.
    this.mediaQueryState = []
  }

  componentDidMount() {
    // loop over our breakpoints object to create a media query
    // instance for each of our breakpoints
    Object.keys(breakpoints).forEach(key => {
      // create a new media query object using the window.matchMedia api.
      // Read more here: https://developer.mozilla.org/en-US/docs/Web/API/Window/matchMedia
      const query = window.matchMedia(`(max-width: ${breakpoints[key]}px)`)

      // add the breakpoint value to the media query object
      query.breakpoint = breakpoints[key]
      // add the name
      query.name = key

      // create the function that will run each
      // time the breakpoint is changed
      function breakpointChange() {
        // this function will communicate with our reducer
        this.dispatchActiveQuery()
      }

      // Attach the even listener to the query
      query.addListener(breakpointChange.bind(this))

      // push this query to our mediaQueryState array,
      // after the loops has run its course, we will
      // have an array that houses a mediaQuery object
      // for each breakpoint in our breakpoints object.
      this.mediaQueryState.push(query)
    })

    this.dispatchActiveQuery()
  }

  /**
   * create the function that will prepare our breakpoint object for dispatch
   */
  dispatchActiveQuery() {
    const { dispatch } = this.props

    // Assuming a desktop first responsive system, the active
    // breakpoint will always be the smallest one that satisfies
    // the media query. We use reduce to travel down the matched media queries
    // and return the smallest item that matches. In the event no breakpoints
    // match (such as when the viewport is larger than our largest breakpoint),
    // we return null
    const activeQuery = this.mediaQueryState.reduce((prev, curr) => {
      let query = null

      if (curr && curr.matches) {
        query = curr
      } else if ( prev && prev.matches) {
        query = prev
      }

      return query
    })

    // console.log("activeQuery", activeQuery)

    // In the event null was returned by activeQuery, we substitute 'default',
    // which will be the active breakpoint when no other breakpoint is matched
    const breakpointName = activeQuery ? activeQuery.name : 'default'

    // We will also record the numerical value for the matched breakpoint
    // as breakpointSize
    const breakpointSize = activeQuery && activeQuery.breakpoint

    // Now dispatch both values using the setActiveBreakpoint action
    dispatch(setActiveBreakpoint({ breakpointName, breakpointSize }))
  }

  render() {
    const { children } = this.props
    return children
  }
}

export default AppWrapper
