import React, { useEffect } from 'react'
import { Trans } from '../../utils/helpers'

function Home({ user, fetchCourses }) {
  useEffect(() => {
    fetchCourses()
  }, [fetchCourses])

  return (
    <div>
      <Trans text="common.welcome" name={user.name} />
    </div>
  )
}

export default Home
