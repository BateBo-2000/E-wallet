const Joi = require('joi')
const schemas = require('./JoiSchemas')
/** joi options */
const options = {abortEarly : false} 
/**the validator function */
const validator = (schema, payload) =>
    schema.validate(payload, options)

/** LOGIN/SIGNIN */
exports.loginValidator = (req, res, next) => {
    const {error, value} = validator(schemas.loginSchema, req .body)
	if(error) return res.status(400).json(error.message) 
    next()
}
exports.signInValidator = (req, res, next) => {
    const {error, value} = validator(schemas.signInSchema, req .body)
	if(error) return res.status(400).json(error.message) 
    next()
}
/** EXCHANGE RATES */
exports.exchangeRates = (req, res, next) => {
    const {error, value} = validator(schemas.exchangeRates, req .body)
	if(error) return res.status(400).json(error.message) 
    next()
}
exports.exchangeRatesCustom = (req, res, next) => {
    const {error, value} = validator(schemas.exchangeRatesCustom, req .body)
	if(error) return res.status(400).json(error.message) 
    next()
}
exports.exchangeRatesConverter = (req, res, next) => {
    const {error, value} = validator(schemas.exchangeRatesConverter, req .body)
	if(error) return res.status(400).json(error.message) 
    next()
}
exports.exchangeRatesConverter = (req, res, next) => {
    const {error, value} = validator(schemas.exchangeRatesConverter, req .body)
	if(error) return res.status(400).json(error.message) 
    next()
}
/** BALANCE*/
exports.createBalance = (req, res, next) => {
    const {error, value} = validator(schemas.createBalance, req .body)
	if(error) return res.status(400).json(error.message) 
    next()
}
/** BALANCE HISTORY */
exports.BHgetHistory = (req, res, next) => {
    const {error, value} = validator(schemas.BHgetHistory, req .body)
	if(error) return res.status(400).json(error.message) 
    next()
}
exports.BHgetHistoryByDates = (req, res, next) => {
    const {error, value} = validator(schemas.BHgetHistoryByDates, req .body)
	if(error) return res.status(400).json({message: error.message}) 
    next()
}
/** TRANSACTIONS */
exports.transactionsMake = (req, res, next) => {
    const {error, value} = validator(schemas.transactionsMake, req .body)
	if(error) return res.status(400).json(error.message) 
    next()
}
exports.transactionsSearchByDate = (req, res, next) => {
    const {error, value} = validator(schemas.transactionsSearchByDate, req .body)
	if(error) return res.status(400).json(error.message) 
    next()
}
exports.transactionsSearchByMoney = (req, res, next) => {
    const {error, value} = validator(schemas.transactionsSearchByMoney, req .body)
	if(error) return res.status(400).json(error.message) 
    next()
}
exports.transactionsSearchByReciever = (req, res, next) => {
    const {error, value} = validator(schemas.transactionsSearchByReciever, req .body)
	if(error) return res.status(400).json(error.message) 
    next()
}
exports.transactionsSearchByBalance = (req, res, next) => {
    const {error, value} = validator(schemas.transactionsSearchByBalance, req .body)
	if(error) return res.status(400).json(error.message) 
    next()
}
/** STATS */
exports.spending = (req, res, next) => {
    const {error, value} = validator(schemas.spending, req .body)
	if(error) return res.status(400).json(error.message) 
    next()
}
exports.reciever = (req, res, next) => {
    const {error, value} = validator(schemas.reciever, req .body)
	if(error) return res.status(400).json(error.message) 
    next()
}
/**PAYMENTS */
exports.DPcreate = (req, res, next) => {
    const {error, value} = validator(schemas.DPcreate, req .body)
	if(error) return res.status(400).json(error.message) 
    next()
}

exports.DPdelete = (req, res, next) => {
    const {error, value} = validator(schemas.DPdelete, req.body) //this should be body!
	if(error) return res.status(400).json(error.message) 
    next()
}
/** ADMIN */
exports.AgetCustom = (req, res, next) => {
    const {error, value} = validator(schemas.AgetCustom, req .query)
	if(error) return res.status(400).json(error.message) 
    next()
}                                                                                      
exports.AaddCurrency = (req, res, next) => {
    const {error, value} = validator(schemas.AaddCurrency, req .body)
	if(error) return res.status(400).json(error.message) 
    next()
}
exports.AdeleteUser = (req, res, next) => {
    const {error, value} = validator(schemas.AdeleteUser, req.query)
	if(error) return res.status(400).json(error.message) 
    next()
}                                                                                           
exports.AdeleteBalance = (req, res, next) => {
    const {error, value} = validator(schemas.AdeleteBalance, req .query)
	if(error) return res.status(400).json(error.message) 
    next()
}                                                                                          
exports.AchangeBalance = (req, res, next) => {
    const {error, value} = validator(schemas.AchangeBalance, req .body)
	if(error) return res.status(400).json(error.message) 
    next()
}
exports.AupdateRole = (req, res, next) => {
    const {error, value} = validator(schemas.AupdateRole, req .body)
	if(error) return res.status(400).json(error.message) 
    next()
}
exports.AsendMail = (req, res, next) => {
    const {error, value} = validator(schemas.AsendMail, req .body)
	if(error) return res.status(400).json(error.message) 
    next()
}
exports.AdeleteCurrency = (req, res, next) => {
    const {error, value} = validator(schemas.AdeleteCurrency, req .query)
	if(error) return res.status(400).json(error.message) 
    next()                                                                                  
}
/** PAYMENT */
exports.payment = (req, res, next) => {
    const {error, value} = validator(schemas.payment, req .body)
	if(error) return res.status(400).json(error.message) 
    next()
}
