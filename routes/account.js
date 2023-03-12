const express = require ('express');
const account_con = require('../controllers/account')
let routerAccount = express.Router();
/* this router is handling everything that starts with /account/*/

routerAccount.use(function stamp(req,res,next){
    console.log('account router used')
    next()
})

routerAccount.route('/info')
.get(account_con.getInfo)
//.post(account_con.addUser)
.delete(account_con.deleteUser)
.patch(account_con.changeField)

module.exports = routerAccount;
