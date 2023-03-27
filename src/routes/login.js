const express = require ('express');
const {loginValidator, signInValidator} = require('../app/validator middleware/validators')
const login_con = require('../controllers/login_controller')
let routerLogin = express.Router();
/* this router is handling everything that starts with /login/*/

routerLogin.use(function stamp(req,res,next){
    console.log('login router used')
    next()
})

//handling login and register
routerLogin
.post('/' ,loginValidator ,login_con.Login)
.post('/register',signInValidator ,login_con.Register)

module.exports = routerLogin;
