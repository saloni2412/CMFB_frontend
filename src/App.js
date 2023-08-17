import React, { Component, Suspense } from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'
import './scss/style.scss'

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

// Containers
const DefaultLayout = React.lazy(() => import('./layout/DefaultLayout'))

// Pages
const Login = React.lazy(() => import('./views/pages/Login'))
const Register = React.lazy(() => import('./views/pages/Register'))
const Page404 = React.lazy(() => import('./views/pages/Page404'))
const Page500 = React.lazy(() => import('./views/pages/Page500'))
const Home = React.lazy(() => import('./views/pages/Home'))
const FindFoodBank = React.lazy(() => import('./views/pages/FindFoodBank'))
const DonateNow = React.lazy(() => import('./views/pages/DonateNow'))


class App extends Component {
  render() {
    return (
      <HashRouter>
        <Suspense fallback={loading}>
          <Routes>
            <Route exact path="/login" name="Login Page" element={<Login />} />
            <Route exact path="/register" name="Register Page" element={<Register />} />
            <Route exact path="/home" name="Home" element={<Home />} />
            <Route exact path="/404" name="Page 404" element={<Page404 />} />
            <Route exact path="/500" name="Page 500" element={<Page500 />} />
            <Route exact path="/find-food-bank" name="Find Food Bank" element={<FindFoodBank />} />
            <Route exact path="/donate-now" name="Donate Now" element={<DonateNow />} />
            <Route path="*" name="Login" element={<DefaultLayout />} />

          </Routes>
        </Suspense>
      </HashRouter>
    )
  }
}

export default App
