const Currency = require('../repository/Currency')
const Transaction = require('../repository/Transaction')
const Balance = require('../repository/Balance')
const BalanceHistroy = require('../repository/BalanceHistory')
exports.makeTrans = async (req,res) => {
    //destructure
    let sender = req.body.user_id
    let reciever_id = req.body.reciever_id
    let amount = req.body.amount*1
    try{
        let currency = await new Currency(req.body.currency).getId()
        let sender_balance_id = req.body.sender_balance_id
        //serach for reciever's balance with matching currency
        let reciever_balance = await new Balance(reciever_id).searchByCurrency(req.body.currency)
        //check if there isnt balance with that currency
        let reciever_balance_id = req.body.reciever_balance_id || reciever_balance[0].balance_id
        
        //makes transaction
        let transaction = new Transaction(sender*1)
        transaction = await transaction.makeTransaction(sender_balance_id, reciever_id, reciever_balance_id, amount, currency.currency_id)

        //make changes in balances of the both users
        let balance_sender = new Balance(sender)
        let bResSend = await balance_sender.updateBalance(amount*-1,sender_balance_id)
        let balance_reciever = new Balance(reciever_id)
        let bResRec = await balance_reciever.updateBalance(amount*1,reciever_balance_id)

        //record che changes for both accounts
        let sneder_balance_after_change = await balance_sender.getBalanceById(sender_balance_id)
        let reciever_balance_after_change = await balance_reciever.getBalanceById(reciever_balance_id)
        let bh_sender = new BalanceHistroy(sender_balance_id)
        let bhResSend = await bh_sender.record(sneder_balance_after_change[0].balance, amount*-1, `Made transaction to user ${reciever_id}`)
        let bh2_reciever = new BalanceHistroy(reciever_balance_id)
        let bhResRec = await bh2_reciever.record(reciever_balance_after_change[0].balance, amount*1, `Recieved transaction from user ${sender}`)
        //gives status
        res.json({message: "SUCCESS"}).status(200)
    }catch (err){
        res.json({message: 'Something went worng making the transaction'}).status(404)
    }
}
exports.getHistory = async (req,res) => {
    //returns full list of transactions made from this user:)
    let transaction = new Transaction(req.body.user_id*1)
    transaction = await transaction.getAll()
    res.json(transaction).status(200)
}
exports.searchByReciever = async (req,res) => {
    //returns full list of transactions made from this user:) for the specific reciever
    let transaction = new Transaction(req.body.user_id*1)
    transaction = await transaction.searchByReciever(req.body.reciever_id, req.body.balance_id)
    res.json(transaction).status(200)
}
exports.searchByMoney = async (req,res) => {
    //returns full list of transactions made from this user:) for more '<' or less '>' than the moeny
    let transaction = new Transaction(req.body.user_id*1)
    transaction = await transaction.searchByMoney(req.body.amount*1, req.body.dependency, req.body.balance_id)
    res.json(transaction).status(200)
}
exports.searchByDate = async (req,res) => {
    //returns list of transactions made in a window of time between_start date and end_date for the user
    let transaction = new Transaction(req.body.user_id*1)
    transaction = await transaction.searchByDate(req.body.start_date, req.body.end_date, req.body.balance_id)
    res.json(transaction).status(200)
}
exports.searchByBalance = async (req,res) => {
    //returns list of transactions made in a window of time between_start date and end_date for the user
    let transaction = new Transaction(req.body.user_id*1)
    transaction = await transaction.searchByBalance(req.body.balance_id*1)
    res.json(transaction).status(200)
}