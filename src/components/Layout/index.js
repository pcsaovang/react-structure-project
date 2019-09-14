import React, { Suspense } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import { setClass } from '../../utils/responsiveHelpers'
import { loading } from '../../utils/helpers'
import routes from '../../routes'

function PrivateRoute({ auth, location, ...rest }) {
  const { isAuthenticated, token } = auth
  const redirectTo = {
    pathname: '/login',
    state: { from: location },
  }

  if (isAuthenticated && token.tokenType && token.accessToken) {
    return <Route {...rest} />
  }

  return <Redirect to={redirectTo} />
}

function Layout(props) {
  const { breakpoint, auth, location, responsive } = props
  const appClass = setClass(responsive, breakpoint)
  return (
    <div className={appClass}>
      <Suspense fallback={loading()}>
        <Switch>
          {routes.map(route => {
            if (route.component) {
              return route.auth ? (
                <PrivateRoute
                  {...route}
                  key={route.id}
                  location={location}
                  auth={auth}
                />
              ) : (
                <Route {...route} key={route.id} />
              )
            }
            return null
          })}
        </Switch>
      </Suspense>
    </div>
  )
}

export default Layout
