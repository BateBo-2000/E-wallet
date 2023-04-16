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
import InputDataForm from './components/InputDataForm'
import LoginAttempts from './components/LoginAttempts'
import AdminMenu from './components/Admin_pages/AdminMenu'
import AdminAuth from './utils/AdminAuth'
import UpdateRole from './components/Admin_pages/UpdateRole'
import UpdateBalance from './components/Admin_pages/UpdateBalance'
import ManageUsers from './components/Admin_pages/ManageUsers'
import Currency from './components/Admin_pages/Currency'
import Custom from './components/Admin_pages/CustomQuery'
import SendMail from './components/Admin_pages/SendMail'
import AddCurrency from './components/Admin_pages/AddCurrency'
import EditBalance from './components/Admin_pages/EditBalance'

function App() {
  
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <header className="App-header">
            <div className="content">
              <Switch>
                {/*Routes that doesn't need to be logged in*/}
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

                {/*Routes that need to be logged in*/}
                <Route exact path='/withdraw'>
                  <RequireAuth><Withdraw/></RequireAuth>
                </Route>
                <Route exact path='/login-attempts'>
                  <RequireAuth><LoginAttempts/></RequireAuth>  
                </Route>
                <Route exact path='/update'>
                  <RequireAuth><InputDataForm/></RequireAuth>
                </Route>
                <Route exact path='/add-money'>
                  <RequireAuth><AddMoney/></RequireAuth>
                </Route>
                <Route exact path='/make-transaction'>
                  <RequireAuth><MakeTrans/></RequireAuth>
                </Route>
                <Route exact path='/create-balance'>
                  <RequireAuth><CreateBalance/></RequireAuth>
                </Route>
                <Route exact path='/balance-history'>
                  <RequireAuth><BalanceHistory/></RequireAuth>
                </Route>
                <Route exact path='/balance/:id'>
                  <RequireAuth><Balance/></RequireAuth>
                </Route>
                <Route exact path='/account'>
                  <RequireAuth><Account/></RequireAuth>
                </Route>
                <Route exact path='/converter'>
                  <RequireAuth><Converter/></RequireAuth>
                </Route>
                <Route exact path='/exchange-rates'>
                  <RequireAuth><ExchangeRates/></RequireAuth>
                </Route>
                <Route exact path='/reminders'>
                  <RequireAuth> <Reminders/></RequireAuth>
                </Route>
                <Route exact path='/create-reminder'>
                  <RequireAuth><CreateReminder/></RequireAuth>
                </Route>
                <Route exact path='/stats'>
                  <RequireAuth><Stats/></RequireAuth>
                </Route>
                <Route exact path='/'>
                  <RequireAuth><Home/></RequireAuth>
                </Route>
                
                {/*Routes that need to be logged in and be admin*/}
                <Route exact path='/admin-menu'>
                  <RequireAuth><AdminAuth><AdminMenu/></AdminAuth></RequireAuth>
                </Route>
                <Route exact path='/update-role'>
                  <RequireAuth><AdminAuth><UpdateRole/></AdminAuth></RequireAuth>
                </Route>
                <Route exact path='/update-balance'>
                  <RequireAuth><AdminAuth><UpdateBalance/></AdminAuth></RequireAuth>
                </Route>
                <Route exact path='/manage-user'>
                  <RequireAuth><AdminAuth><ManageUsers/></AdminAuth></RequireAuth>
                </Route>
                <Route exact path='/currency'>
                  <RequireAuth><AdminAuth><Currency/></AdminAuth></RequireAuth>
                </Route>
                <Route exact path='/custom-query'>
                  <RequireAuth><AdminAuth><Custom/></AdminAuth></RequireAuth>
                </Route>
                <Route exact path='/send-mail'>
                  <RequireAuth><AdminAuth><SendMail/></AdminAuth></RequireAuth>
                </Route>
                <Route exact path='/add-currency'>
                  <RequireAuth><AdminAuth><AddCurrency/></AdminAuth></RequireAuth>
                </Route>
                <Route exact path='/change-balance'>
                  <RequireAuth><AdminAuth><EditBalance/></AdminAuth></RequireAuth>
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
    </AuthProvider>
  )
}

export default App