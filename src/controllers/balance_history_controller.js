const BalanceHistory = require('../model/BalanceHistory')
exports.record = async (req, res, next) =>{
    //records in balance history
    let balanceId = req.body.balanceId*1
    let {amount_after_change,change_amount,reason_for_change} = req.body
    let balanceHistory = new BalanceHistory(balanceId)
    balanceHistory = await balanceHistory.record(amount_after_change,change_amount,reason_for_change)
    res.status(200).json(balanceHistory)
}
exports.getHistory = async (req, res, next) =>{
    let balanceId = req.body.balanceId*1
    let balanceHistory = new BalanceHistory(balanceId)
    balanceHistory = await balanceHistory.getHistory()
    res.status(200).json(balanceHistory)
}
exports.getHistoryByDate = async (req, res, next) =>{
    //gets balance history by balance_id and between dates provided
    let {end_date,start_date,balanceId} = req.body
    let balanceHistory = new BalanceHistory(balanceId*1)
    balanceHistory = await balanceHistory.getHistory()
    res.status(200).json(balanceHistory)
}