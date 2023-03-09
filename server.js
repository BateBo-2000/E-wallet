require('dotenv').config()
const express = require('express')
const jwt = require('jsonwebtoken')
const {auth} = require('./authorization_service')
const routerAccount = require('./routes/account')
const routerExchange = require('./routes/exchange')
const routerStats = require('./routes/stats')

const app = express()
const port = process.env.PORT || 5000
app.use(express.json())

//routes
app.use('/stats',routerStats)
app.use('/account',routerAccount)
app.use('/exchange-rates',routerExchange)

//testing data
/*

const test_data = [{
    a:1,
    b:"asdf"
}]
app.get('/test',auth, (req,res)=>{
    res.json(test_data)
})

app.post('/login', (req,res)=>{
    //Authenticate the user
    const username= req.body.username;
    const user = {
        id:0,
        username: username
    }
    
    const token = jwt.sign(user,process.env.ACCESS_TOKEN_SECRET)
    res.json({accessToken: token})
})


*/

app.listen(port,err => {
    if(err) return console.log('ERROR!'+err) 
    console.log(`Server listening on port ${port}`)})