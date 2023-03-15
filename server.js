require('dotenv').config()
const express = require('express')
const jwt = require('jsonwebtoken')
const {auth} = require('./authorization_service')
const routerAccount = require('./routes/account')
const routerExchange = require('./routes/exchange')
const routerStats = require('./routes/stats')
const routerLogin = require('./routes/login')
const routerTrans = require('./routes/transactions')


const app = express()
const port = process.env.PORT || 5000
app.use(express.json())

//routes
app.use('/stats',routerStats)
app.use('/account',routerAccount)
app.use('/exchange-rates',routerExchange)
app.use('/login',routerLogin)
app.use('/transactions',routerTrans)


app.listen(port,err => {
    if(err) return console.log('ERROR!'+err) 
    console.log(`Server listening on port ${port}`)})