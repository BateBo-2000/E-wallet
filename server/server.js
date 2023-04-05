require('dotenv').config()
const express = require('express')
const cors = require('cors')
const routerAccount = require('./src/routes/account')
const routerExchange = require('./src/routes/exchange')
const routerStats = require('./src/routes/stats')
const routerLogin = require('./src/routes/login')
const routerTrans = require('./src/routes/transactions')
const routerBalance = require('./src/routes/balance')
const routerBalanceHistory = require('./src/routes/balance_history')
const routerDelayedPayments = require('./src/routes/delayedpayments')
const routerAdmin = require('./src/routes/admin')
const routerPayment = require('./src/routes/payment')
const {startReminders} = require('./src/app/reminderStarter')

const app = express()
const port = process.env.PORT || 5000
app.use(express.json())
app.use(cors({
    origin: "*"
}))
startReminders()

//routes
app.use('/stats',routerStats)
app.use('/account',routerAccount)
app.use('/exchange-rates',routerExchange)
app.use('/login',routerLogin)
app.use('/transactions',routerTrans)
app.use('/balance',routerBalance)
app.use('/balance_history',routerBalanceHistory)
app.use('/delayed-payments',routerDelayedPayments)
app.use('/admin',routerAdmin)
app.use('/payment', routerPayment)

app.post('/test', (req,res)=>{
    req.body = {...req.body, status: "success"}
    res.json(req.body).status(200)
})

app.listen(port,err => {
    if(err) return console.log('ERROR!'+err) 
    console.log(`Server listening on port ${port}`)})