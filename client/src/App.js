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
import Stats from './components/Stats'
import Converter from './components/converter'
import CreateReminder from './components/CreateReminder'
import Balance from './components/Balance'
import BalanceHistory from './components/BalanceHistory'
import Withdraw from './components/Withdraw'
import AddMoney from './components/AddMoney'
import MakeTrans from './components/MakeTrans'

function App() {
  
  return (
    <Router>
      <div className="App">
        <header className="App-header">
            <div className="content">
              <Switch>
              <Route path='/withdraw'>
                <Withdraw/>
              </Route>
              <Route path='/add-money'>
                <AddMoney/>
              </Route>
              <Route path='/make-transaction'>
                <MakeTrans/>
              </Route>
              <Route path='/balance-history'>
                <BalanceHistory/>
              </Route>
              <Route path='/login'>
                <LoginForm/>
              </Route>
              <Route path='/balance'>
                <Balance/>
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
              <Route path='/converter'>
                <Converter/>
              </Route>
              <Route path='/exchange-rates'>
                <ExchangeRates/>
              </Route>
              <Route path='/reminders'>
                <Reminders/>
              </Route>
              <Route path='/create-reminder'>
                <CreateReminder/>
              </Route>
              <Route path='/stats'>
                <Stats/>
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