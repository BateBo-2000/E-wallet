const express = require ('express');
const patment_con = require('../controllers/payment_controller')
const {authenticate}  = require('../app/authorization middleware/authorization_service')
const {payment} = require('../app/validator middleware/validators')
let routerPayment = express.Router();
/* this router is handling everything that starts with /payment/*/

routerPayment.use(function stamp(req,res,next){
    console.log('payment router used')
    next()
})

//handling login and register
routerPayment
.post('/importMoney', payment, authenticate, patment_con.import)
.post('/withdrawMoney', payment, authenticate, patment_con.withdraw)
module.exports = routerPayment;
