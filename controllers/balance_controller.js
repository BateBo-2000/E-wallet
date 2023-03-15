const Balance = require('../model/Balance')
exports.getBalanceById = async (req, res, next) =>{
    //gets balance by balance_id
}
exports.getUserBalance = async (req, res, next) =>{
    //gets balance by user_id id
    let user_id = req.query.user_id *1
    let balance = new Balance(user_id)
    balance = await balance.getBalanceByUser()
    res.json(balance).status(200)
}
exports.updateBalance = async (req, res, next) =>{      // !!!!HAVE TO PUT RECORD IN BALANCE HISTORY HERE!!!!!
    //add or remove money from the balance
    let user_id = req.body.user_id *1
    let balance = new Balance(user_id)
    balance = await balance.updateBalance(req.body.amount*1, req.body.balance_id)
    res.json(balance).status(200)
}
exports.createBalance = async (req, res, next) =>{      // !!!!! HAVE TO PUT CURRENCY ID SEARCH HERE !!!!!!
    //create a new balance
    let user_id = req.body.user_id *1
    let balance = new Balance(user_id)
    balance = await balance.createBalance(req.body.currency *1) // this should be string not a number
    res.json(balance).status(200)
}