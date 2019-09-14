import {lazy} from 'react'

const Home = lazy(() => import('./containers/Home'))
const Page404 = lazy(() => import('./containers/NotFound/Page404'))

const routes = [
  { id: 'home', path: '/', exact: true, name: 'Home', component: Home, auth: true },
  { id: 'not-found', exact: true, name: 'Not Found', component: Page404 },
]

export default routes