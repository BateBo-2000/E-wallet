const express = require('express');
const delayed_payments_con = require('../controllers/delayed_payments_controller')
const {authenticate} = require('../app/authorization middleware/authorization_service')
const {DPcreate, DPdelete} = require('../app/validator middleware/validators')
let routerDelayedPayments = express.Router();
/* this router is handling everything that starts with /delayed-payments/*/

routerDelayedPayments.use(function stamp(req,res,next){
    console.log('DelayedPayments router used')
    next()
})

routerDelayedPayments
.get('/get', authenticate, delayed_payments_con.getReminders)
.post('/create', DPcreate, authenticate, delayed_payments_con.createReminder)
.post('/delete', DPdelete, authenticate, delayed_payments_con.deleteReminder)
.post('/create-recurring', authenticate, delayed_payments_con.startReminder)

module.exports = routerDelayedPayments;