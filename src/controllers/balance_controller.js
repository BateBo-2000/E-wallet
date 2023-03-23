const Balance = require('../repository/Balance')
const Currency = require('../repository/Currency')
// exports.getBalanceById = async (req, res) =>{ //I'll add it if needed
//     //gets balance by balance_id
// }
exports.getUserBalance = async (req, res) =>{
    //gets balance by user_id id
    let user_id = req.body.user_id *1
    let balance = new Balance(user_id)
    balance = await balance.getBalanceByUser()
    res.json(balance).status(200)
}
exports.updateBalance = async (req, res) =>{
    //add or remove money from the balance
    let user_id = req.body.user_id *1
    let balance = new Balance(user_id)
    balance = await balance.updateBalance(req.body.amount*1, req.body.balance_id)
    res.json(balance).status(200)
}
exports.createBalance = async (req, res) =>{
    //create a new balance
    let currency = await new Currency(req.body.currency).getId()
    let user_id = req.body.user_id *1
    let balance = new Balance(user_id)
    balance = await balance.createBalance(currency.currency_id) // this should be string not a number
    res.json(balance).status(200)
}