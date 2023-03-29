const Stripe = require('../repository/Stripe')
const Balance = require('../repository/Balance')
const BalanceHistroy = require('../repository/BalanceHistory')

exports.import = async(req, res) =>{

    //destrucutre
    let {amount, balance_id, user_id} = req.body
    //balance repo
    let balance = new Balance(user_id)
    //get the curency of the account
    let currency = await balance.getCurrencyName(balance_id)
    currency = currency[0].currency_name
    //add money with stripe
    let stripe = new Stripe()
    stripe = await stripe.importMoney(amount,currency)
    if(stripe){
        //change the balance
        let balance_res = await balance.updateBalance(amount,balance_id)

        //record the changes
        let balance_after_change = await balance.getBalanceById(balance_id)
        let bh = new BalanceHistroy(balance_id)
        bh = await bh.record(balance_after_change[0].balance,amount,"Imported money to the balance")
        return res.json({balance_res, bh}).status(200)
    }
    //gives status fail
    res.json({message: "error"}).status(400)
}
exports.withdraw = async(req, res) =>{
    //destrucutre
    let {amount, balance_id, user_id} = req.body
    //balance repo
    let balance = new Balance(user_id)
    //get the curency of the account
    let currency = await balance.getCurrencyName(balance_id)
    currency = currency[0].currency_name
    //refund money with stripe
    let stripe = new Stripe()
    stripe = await stripe.returnMoney(amount,currency)
    if(stripe){
        //change the balance
        let balance_res = await balance.updateBalance(amount*-1,balance_id)

        //record the changes
        let balance_after_change = await balance.getBalanceById(balance_id)
        let bh = new BalanceHistroy(balance_id)
        bh = await bh.record(balance_after_change[0].balance,amount,"Exported money from the balance")
        return res.json({balance_res, bh}).status(200)
    }
    //gives status fail
    res.json({message: "error"}).status(400)
}