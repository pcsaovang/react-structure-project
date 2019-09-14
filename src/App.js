import React, { Suspense, lazy } from 'react'
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import { ConnectedRouter } from 'connected-react-router'
import AppWrapper from './containers/Layout/AppWrapper'
import { loading } from './utils/helpers'
import './App.scss'

const Login = lazy(() => import('./containers/Auth/Login'))
const Layout = lazy(() => import('./containers/Layout'))

function App({ history }) {
  return (
    <AppWrapper>
      <BrowserRouter>
        <Suspense fallback={loading()}>
          <ConnectedRouter history={history}>
            <Switch>
              <Route path="/login" render={props => <Login {...props} />} />
              <Route path="/" render={props => <Layout {...props} />} />
            </Switch>
          </ConnectedRouter>
        </Suspense>
      </BrowserRouter>
    </AppWrapper>
  )
}

export default App
