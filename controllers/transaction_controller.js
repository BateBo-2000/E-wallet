const Currency = require('../model/Currency')
const Transaction = require('../model/Transaction')
exports.makeTrans = async (req,res,next) => {
    //makes transaction
    let currency = await new Currency(req.body.currency).getId()
    let transaction = new Transaction(req.body.user_id*1)
    transaction = await transaction.makeTransaction(req.body.reciever, req.body.amount*1,currency.currency_id)
    res.json(transaction).status(200)
}
exports.delete = async (req,res,next) => {  //admin stuff
    
}
exports.getHistory = async (req,res,next) => {
    //returns full list of transactions made from this user:)
    let transaction = new Transaction(req.query.user_id*1)
    transaction = await transaction.getAll()
    res.json(transaction).status(200)
}
exports.searchByReciever = async (req,res,next) => {
    //returns full list of transactions made from this user:) for the specific reciever
    let transaction = new Transaction(req.body.user_id*1)
    transaction = await transaction.searchByReciever(req.body.reciever)
    res.json(transaction).status(200)
}
exports.searchByMoney = async (req,res,next) => {
    //returns full list of transactions made from this user:) for more '<' or less '>' than the moeny
    let transaction = new Transaction(req.body.user_id*1)
    transaction = await transaction.searchByMoney(req.body.amount*1, req.body.dependency)
    res.json(transaction).status(200)
}
exports.searchByDate = async (req,res,next) => {
    //returns list of transactions made in a window of time between_start date and end_date for the user
    let transaction = new Transaction(req.body.user_id*1)
    transaction = await transaction.searchByDate(req.body.start_date, req.body.end_date)
    res.json(transaction).status(200)
}