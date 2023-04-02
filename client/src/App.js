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
import Terms from './components/terms'

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
              <Route path='/terms'>
                <Terms/>
              </Route>
              <Route path='/account-info-form'>
                <AccountInfoForm/>
              </Route>
              <Route path='/account'>
                <Account/>
              </Route>
              <Route path='/exchange-rates'>
                <ExchangeRates/>
              </Route>
              <Route path='/reminders'>
                <Reminders/>
              </Route>
              <Route path='/money'>
                <Home/>
              </Route>
              <Route path='/'>
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