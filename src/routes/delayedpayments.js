const express = require('express');
const delayed_payments_con = require('../controllers/delayed_payments_controller')
let routerDelayedPayments = express.Router();
/* this router is handling everything that starts with /delayed-payments/*/

routerDelayedPayments.use(function stamp(req,res,next){
    console.log('DelayedPayments router used')
    next()
})

routerDelayedPayments
.get('/get',delayed_payments_con.getReminders)
.post('/create',delayed_payments_con.createReminder)
.post('/delete',delayed_payments_con.deleteReminder)
.post('/create-recurring',delayed_payments_con.startReminder)

module.exports = routerDelayedPayments;