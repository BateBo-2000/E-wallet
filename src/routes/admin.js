const express = require ('express');
const admin = require('../controllers/admin_controller')
let routerAdmin = express.Router();
const {authenticate} = require('../app/authorization middleware/authorization_service')
const {admin_auth} = require('../app/authorization middleware/admin_auth')
/* this router is handling everything that starts with /account/*/

routerAdmin.use(function stamp(req,res,next){
    console.log('admin router used')
    next()
})

routerAdmin
.get('/getCustom', authenticate, admin_auth,admin.get)
.post('/addCurrency', authenticate, admin_auth,admin.addCurrency)
.delete('/deleteCurrency', authenticate, admin_auth,admin.deleteCurrency)
.delete('/deleteUser', authenticate, admin_auth,admin.deleteUser)
.delete('/deleteBalance', authenticate, admin_auth,admin.deleteBalance)
.patch('/changeBalance', authenticate, admin_auth,admin.changeBalance)
.patch('/updateRole', authenticate, admin_auth,admin.updateRole)
.post('/sendMail', authenticate, admin_auth,admin.sendMail)


module.exports = routerAdmin;
