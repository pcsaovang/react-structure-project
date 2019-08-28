import React, { Suspense } from 'react'
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import Layout from './containers/Layout'
import { loading } from './utils/helpers'

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={loading()}>
        <Switch>
          <Route path="/" render={props => <Layout {...props} />} />
        </Switch>
      </Suspense>
    </BrowserRouter>
  )
}

export default App
