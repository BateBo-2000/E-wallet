require('dotenv').config()
const express = require('express')
const jwt = require('jsonwebtoken')
const {auth} = require('./src/app/authorization middleware/authorization_service')
const routerAccount = require('./src/routes/account')
const routerExchange = require('./src/routes/exchange')
const routerStats = require('./src/routes/stats')
const routerLogin = require('./src/routes/login')
const routerTrans = require('./src/routes/transactions')
const routerBalance = require('./src/routes/balance')
const routerBalanceHistory = require('./src/routes/balance_history')
const routerDelayedPayments = require('./src/routes/delayedpayments')

const app = express()
const port = process.env.PORT || 5000
app.use(express.json())

//routes
app.use('/stats',routerStats)
app.use('/account',routerAccount)
app.use('/exchange-rates',routerExchange)
app.use('/login',routerLogin)
app.use('/transactions',routerTrans)
app.use('/balance',routerBalance)
app.use('/balance_history',routerBalanceHistory)
app.use('/delayed-payments',routerDelayedPayments)


app.listen(port,err => {
    if(err) return console.log('ERROR!'+err) 
    console.log(`Server listening on port ${port}`)})