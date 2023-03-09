const express = require('express');
// const test = require('./../database/queries')                        /*testing purposes*/
let routerAccount = express.Router();
/* this router is handling everything that starts with /account/*/

routerAccount.use(function stamp(req,res,next){
    console.log('account router used')
    next()
})

routerAccount
.get('/user',(req, res)=>{
    //handle get request    == get data
    res.sendStatus(200)
})
.post('/user',(req, res)=>{
    //handle post request   == get/add data
    res.sendStatus(200)
})
.put('/user',(req, res)=>{
    //handle put request    == change data
    res.sendStatus(200)
})
.delete('/user',(req, res)=>{
    //handle delete request == delete user/data
    res.sendStatus(200)
})
.patch('/user',(req, res)=>{
    //handle patch request  == change data
    res.sendStatus(200)
})

module.exports = routerAccount;
