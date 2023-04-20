const express = require ('express');
const admin = require('../controllers/admin_controller')
let routerAdmin = express.Router();
const {authenticate} = require('../app/authorization middleware/authorization_service')
const {admin_auth} = require('../app/authorization middleware/admin_auth')
const {AgetCustom, AaddCurrency, AdeleteCurrency, AdeleteUser, AdeleteBalance, AchangeBalance, AupdateRole, AsendMail} = require('../app/validator middleware/validators')
/* this router is handling everything that starts with /account/*/

routerAdmin.use(function stamp(req,res,next){
    console.log('admin router used')
    next()
})

routerAdmin
.get('/getCustom', AgetCustom, authenticate, admin_auth,admin.get)
.post('/addCurrency', AaddCurrency, authenticate, admin_auth,admin.addCurrency)
.delete('/deleteUser', AdeleteUser, authenticate, admin_auth,admin.deleteUser)
.delete('/deleteBalance', AdeleteBalance, authenticate, admin_auth,admin.deleteBalance)
.patch('/changeBalance', AchangeBalance, authenticate, admin_auth,admin.changeBalance)
.patch('/updateRole', AupdateRole, authenticate, admin_auth,admin.updateRole)
.post('/sendMail', AsendMail, authenticate, admin_auth,admin.sendMail)


module.exports = routerAdmin;
