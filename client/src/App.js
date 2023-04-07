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
import CreateBalance from './components/CreateBalance'
import { AuthProvider } from './utils/auth'
import RequireAuth from './utils/RequireAuth'
function App() {
  
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <header className="App-header">
            <div className="content">
              <Switch>
                <Route exact path='/login'>
                  <LoginForm/>
                </Route>
                <Route exact path='/sign-in'>
                  <SignInForm/>
                </Route>
                <Route exact path='/account-info-form'>
                    <AccountInfoForm/>
                </Route>
                <Route exact path='/terms'>
                    <Terms/>
                </Route>

                <RequireAuth>
                  <Route exact path='/withdraw'>
                    <Withdraw/>
                  </Route>
                  <Route exact path='/add-money'>
                    <AddMoney/>
                  </Route>
                  <Route exact path='/make-transaction'>
                    <MakeTrans/>
                  </Route>
                  <Route exact path='/create-balance'>
                    <CreateBalance/>
                  </Route>
                  <Route exact path='/balance-history'>
                    <BalanceHistory/>
                  </Route>
                  <Route exact path='/balance/:id'>
                    <Balance/>
                  </Route>
                  <Route exact path='/account'>
                    <Account/>
                  </Route>
                  <Route exact path='/converter'>
                    <Converter/>
                  </Route>
                  <Route exact path='/exchange-rates'>
                    <ExchangeRates/>
                  </Route>
                  <Route exact path='/reminders'>
                    <Reminders/>
                  </Route>
                  <Route exact path='/create-reminder'>
                    <CreateReminder/>
                  </Route>
                  <Route exact path='/stats'>
                    <Stats/>
                  </Route>
                  <Route exact path='/'>
                    <Home/>
                  </Route>
                </RequireAuth>
                  

                <Route path='*'>
                  <NavBar/>
                  <NotFound/>
                </Route>
              </Switch>
            </div>
          </header>
        </div>
      </Router>
    </AuthProvider>
  )
}

export default App