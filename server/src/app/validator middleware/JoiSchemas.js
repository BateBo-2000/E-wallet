const Joi = require('joi')

/** LOGIN/SIGNIN */
exports.loginSchema = Joi.object({
    username: Joi.string().min(4).max(45).required(),
    password: Joi.string().min(4).max(45).required()
})
exports.signInSchema = Joi.object({
    username: Joi.string().min(4).max(40).required(),
    password: Joi.string().min(4).max(40).required(),
    egn: Joi.string().length(10).pattern(/^\d{10}$/).required(), //USES REGEX - exactily 10 digits
    first_name: Joi.string().min(3).max(45).required(),
    mid_name: Joi.string().min(3).max(45).optional(),
    last_name: Joi.string().min(3).max(45).required(),
    address: Joi.string().min(15).max(250).required(),
    date_of_birth: Joi.date().iso().raw().max(new Date("2005-01-01")).required(),
    secret_question: Joi.string().min(15).required(),
    secret_answer: Joi.string().min(15).required(),
    email: Joi.string().email().lowercase().required(),
})
exports.patchAccount = Joi.object({
    first_name: Joi.string().min(3).max(45).optional(),
    mid_name: Joi.string().min(3).max(45).optional(),
    last_name: Joi.string().min(3).max(45).optional(),
    address: Joi.string().min(15).max(250).optional(),
    email: Joi.string().email().lowercase().optional(),
})
/** EXCHANGE RATES */
exports.exchangeRates = Joi.object({
    // "currencyArray":["USD","BGN","GBP"],
    // "baseCurrency":"EUR"

    currencyArray: Joi.array().items(Joi.string().uppercase().length(3)).required(),
    baseCurrency: Joi.string().uppercase().length(3).required()
})
exports.exchangeRatesCustom = Joi.object({
    // "currencyArray":["USD","BGN","GBP"],
    // "baseCurrency":"EUR",
    // "start_date":"2023-02-17",
    // "end_date":"2023-01-12"

    currencyArray: Joi.array().items(Joi.string().uppercase().length(3)).required(),
    baseCurrency: Joi.string().uppercase().length(3).required(),
    start_date: Joi.date().iso().raw().required(),
    end_date: Joi.date().iso().raw().required()

})
exports.exchangeRatesConverter = Joi.object({
    // "fromCurrency":"BGN",
    // "toCurrency":"EUR",
    // "amount":100000,
    // "date":"2023-02-12"
    fromCurrency: Joi.string().uppercase().length(3).required(),
    toCurrency: Joi.string().uppercase().length(3).required(),
    amount: Joi.number().precision(2).required(),
    date: Joi.date().iso().raw().required()

})
/**BALANCE */
exports.createBalance = Joi.object({
    currency: Joi.string().uppercase().length(3).required()
})
/**BALANCE HISTORY */
exports.BHgetHistory = Joi.object({
    balance_id: Joi.number().integer().positive().required()
})
exports.BHgetHistoryByDates = Joi.object({
    balance_id: Joi.number().integer().positive().required(),
    start_date: Joi.date().iso().raw().required(),
    end_date:   Joi.date().iso().raw().greater(Joi.ref('start_date')).required()
})
/**TRANSACTIONS */
exports.transactionsMake = Joi.object({
    reciever_id: Joi.number().integer().positive().required(),
    sender_balance_id: Joi.number().integer().positive().required(),
    amount: Joi.number().positive().required(),
    currency: Joi.string().uppercase().length(3).required()
})
exports.transactionsSearchByDate = Joi.object({
    start_date: Joi.date().iso().raw().required(),
    end_date:   Joi.date().iso().raw().greater(Joi.ref('start_date')).required(),
    balance_id: Joi.number().integer().positive().required()
})
exports.transactionsSearchByMoney = Joi.object({
    dependency: Joi.string().valid('<','>').required(),
    amount: Joi.number().positive().required(),
    balance_id: Joi.number().integer().positive().required()
})
exports.transactionsSearchByReciever = Joi.object({
    reciever_id: Joi.number().integer().positive().required(),
    balance_id: Joi.number().integer().positive().required()
})
exports.transactionsSearchByBalance = Joi.object({
    balance_id: Joi.number().integer().positive().required()
})
/**STATS */
exports.spending = Joi.object({
    start_date: Joi.date().iso().raw().required(),
    end_date:   Joi.date().iso().raw().greater(Joi.ref('start_date')).required(),
    step: Joi.string().valid('day','week','month')
})
exports.reciever = Joi.object({
    start_date: Joi.date().iso().raw().required(),
    end_date:   Joi.date().iso().raw().greater(Joi.ref('start_date')).required()
})
/**PAYMENTS */
exports.DPcreate = Joi.object({
    start_date: Joi.date().iso().raw().required(),
    title: Joi.string().max(50).required(),
    text: Joi.string().max(1000).required(),
    cron: Joi.optional()
})
exports.DPcreateReocurrning = Joi.object({
    start_date: Joi.date().iso().raw().required().greater(new Date()),
    title: Joi.string().length(50).required(),
    text: Joi.string().max(1000).required(),
    cron: Joi.string().required()

})
exports.DPdelete = Joi.object({
    reminder_id: Joi.number().integer().positive().required()
})

/**ADMIN */
exports.AgetCustom = Joi.object({
    table: Joi.string().required(),
    condition: Joi.string().required()
})                                                                               
exports.AaddCurrency = Joi.object({
    currency_id:Joi.number().integer().positive().required(),
    currency_name: Joi.string().uppercase().length(3).required()
})
exports.AdeleteCurrency = Joi.object({
    currency_id: Joi.number().integer().positive().required()
})
exports.AdeleteUser = Joi.object({
    deleteUser_id: Joi.number().integer().positive().required()
})
exports.AdeleteBalance = Joi.object({
    balance_id: Joi.number().integer().positive().required()
})
exports.AchangeBalance = Joi.object({
    user_id: Joi.number().integer().positive().required(),
    amount: Joi.number().positive().required()
})
exports.AupdateRole = Joi.object({
    chnage_user_id: Joi.number().integer().positive().required(),
    chnge_role: Joi.string().valid('user','admin')
})
exports.AsendMail = Joi.object({
    reciever: Joi.string().email().required(),
    title: Joi.string().max(100).required(),
    text: Joi.string().max(1000).required()
})
/**PAYMENT */
exports.payment = Joi.object({
    amount: Joi.number().positive().required(),
    balance_id: Joi.number().integer().positive().required()
})
