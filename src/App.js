import React, { Suspense } from 'react'
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import AppWrapper from './containers/Layout/AppWrapper'
import Layout from './containers/Layout'
import { loading } from './utils/helpers'

function App() {
  return (
    <AppWrapper>
      <BrowserRouter>
        <Suspense fallback={loading()}>
          <Switch>
            <Route
              path="/"
              render={props => {
                const { location, history, match } = props
                return (
                  <Layout location={location} history={history} match={match} />
                )
              }}
            />
          </Switch>
        </Suspense>
      </BrowserRouter>
    </AppWrapper>
  )
}

export default App
