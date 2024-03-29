const Admin = require('../repository/Admin') 
// GET REQUESTS
exports.get = async (req, res)=>{
    let admin = new Admin(req.body.user_id)
    admin = await admin.customSelect(req.query.table, req.query.condition)
    res.json(admin).status(200)
}

// CURRENCY
exports.addCurrency = async (req, res)=>{
    let admin = new Admin(req.body.user_id)
    admin = await admin.addCurrency(req.body.currency_id,req.body.currency_name)
    res.json(admin).status(200)
}
// USER
exports.deleteUser = async (req, res)=>{
    let admin = new Admin(req.body.user_id)
    admin = await admin.deleteUser(req.query.deleteUser_id)
    res.json(admin).status(200)
}
// BALANCE 
exports.changeBalance = async (req, res)=>{
    let admin = new Admin(req.body.user_id)
    admin = await admin.changeBalance(req.body.amount, req.body.balance_id)
    res.json(admin).status(200)
}
exports.deleteBalance = async (req, res)=>{
    let admin = new Admin(req.body.user_id)
    admin = await admin.deleteBalance(req.query.balance_id)
    res.json(admin).status(200)
}
// ROLE 
exports.updateRole = async (req, res)=>{
    let admin = new Admin(req.body.user_id)
    admin = await admin.updateUserRole(req.body.chnage_user_id, req.body.chnge_role)
    res.json(admin).status(200)
}
// SEND MAIL
exports.sendMail = async (req, res)=>{
    let admin = new Admin(req.body.user_id)
    admin = await admin.sendEmail(req.body.reciever, req.body.title, req.body.text)
    res.json(admin).status(200)
}


