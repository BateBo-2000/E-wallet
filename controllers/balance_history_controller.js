const User = require('../model/Balance')
exports.record = async (req, res, next) =>{
    //records in balance history
}
exports.getHistory = async (req, res, next) =>{
    //gets balance history by balance_id
}
exports.getHistoryByDate = async (req, res, next) =>{
    //gets balance history by balance_id and between dates provided
}