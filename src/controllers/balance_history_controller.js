const BalanceHistory = require('../repository/BalanceHistory')
exports.record = async (req, res) =>{
    //records in balance history
    let balance_id = req.body.balance_id*1
    let {amount_after_change,change_amount,reason_for_change} = req.body
    let balanceHistory = new BalanceHistory(balance_id)
    balanceHistory = await balanceHistory.record(amount_after_change,change_amount,reason_for_change)
    res.status(200).json(balanceHistory)
}
exports.getHistory = async (req, res) =>{
    let balance_id = req.body.balance_id*1
    let balanceHistory = new BalanceHistory(balance_id)
    balanceHistory = await balanceHistory.getHistory()
    res.status(200).json(balanceHistory)
}
exports.getHistoryByDate = async (req, res) =>{
    //gets balance history by balance_id and between dates provided
    let {end_date,start_date,balance_id} = req.body
    let balanceHistory = new BalanceHistory(balance_id*1)
    balanceHistory = await balanceHistory.getHistory()
    res.status(200).json(balanceHistory)
}