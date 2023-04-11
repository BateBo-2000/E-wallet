const express = require ('express');
const account_con = require('../controllers/account_controller')
let routerAccount = express.Router();
const {authenticate} = require('../app/authorization middleware/authorization_service')
const {patchAcccountValidator} = require('../app/validator middleware/validators')
/* this router is handling everything that starts with /account/*/

routerAccount.use(function stamp(req,res,next){
    console.log('account router used')
    next()
})

routerAccount.route('/info')
.get(authenticate, account_con.getInfo)
.delete(authenticate, account_con.deleteUser)
.patch(patchAcccountValidator, authenticate, account_con.changeField)

routerAccount.get('/login_info', authenticate, account_con.getLoginTry)
//da sloja delete history
module.exports = routerAccount;
