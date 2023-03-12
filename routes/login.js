const express = require ('express');
const login_con = require('../controllers/login')
let routerLogin = express.Router();
/* this router is handling everything that starts with /login/*/

routerLogin.use(function stamp(req,res,next){
    console.log('login router used')
    next()
})

routerLogin.route('/')
.get(login_con.Login)

module.exports = routerLogin;
