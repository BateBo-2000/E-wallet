import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import NotFound from './components/NotFound'
import Home from './components/Home'
import LoginForm from './components/LoginForm'
import SignInForm from './components/SignInForm'
import NavBar from './components/NavBar'
import Account from './components/Account'
import ExchangeRates from './components/Exchange-rates'
import Reminders from './components/Reminders'
import AccountInfoForm from './components/AccountInfoForm'

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
            <div className="content">
              <Switch>
              <Route path='/login'>
                <LoginForm/>
              </Route>
              <Route path='/sign-in'>
                <SignInForm/>
              </Route>
              <Route path='/account-info-form'>
                <AccountInfoForm/>
              </Route>
              <Route path='/account'>
                <NavBar/>
                <Account/>
              </Route>
              <Route path='/exchange-rates'>
                <NavBar/>
                <ExchangeRates/>
              </Route>
              <Route path='/reminders'>
                <NavBar/>
                <Reminders/>
              </Route>
              <Route path='/money'>
                <NavBar/>
                <Home/>
              </Route>
              <Route path='/'>
                <NavBar/>
                <Home/>
              </Route>
              <Route path='*'>
                <NavBar/>
                <NotFound/>
              </Route>
              </Switch>
            </div>
        </header>
      </div>
    </Router>
  )
}

export default App