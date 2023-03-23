const Joi = require('joi');

const loginSchema = Joi.object({
    username: Joi.string().min(5).max(40).required(),
    password: Joi.string().min(5).max(40).required()
})

const signInSchema = Joi.object({
    username: Joi.string().min(5).max(40).required(),
    password: Joi.string().min(5).max(40).required(),
    egn: Joi.string().length(10).pattern(/^\d{10}$/).required(), //USES REGEX - exactily 10 digits
    first_name: Joi.string().min(3).max(45).required(),
    mid_name: Joi.string().min(3).max(45).optional(),
    last_name: Joi.string().min(3).max(45).required(),
    address: Joi.string().min(15).max(250).required(),
    date_of_birth: Joi.date().format("YYYY-MM-DD").raw().min(new Date("2005-01-01")).required(),
    secret_question: Joi.string().min(15).required(),
    secret_answer: Joi.string().min(15).required(),
    email: Joi.string().email().lowercase().required(),
})

const exchangeRates = Joi.object({
    // "currencyArray":["USD","BGN","GBP"],
    // "baseCurrency":"EUR"

    currencyArray: Joi.array().items(Joi.string().uppercase().length(3)).required(),
    baseCurrency: Joi.string().uppercase().length(3).required()
})

const exchangeRatesCustom = Joi.object({
    // "currencyArray":["USD","BGN","GBP"],
    // "baseCurrency":"EUR",
    // "start_date":"2023-02-17",
    // "end_date":"2023-01-12"

    currencyArray: Joi.array().items(Joi.string().uppercase().length(3)).required(),
    baseCurrency: Joi.string().uppercase().length(3).required(),
    start_date: Joi.date().format("YYYY-MM-DD").raw().required(),
    end_date: Joi.date().format("YYYY-MM-DD").raw().required()

})

const exchangeRatesConverter = Joi.object({
    // "fromCurrency":"BGN",
    // "toCurrency":"EUR",
    // "amount":100000,
    // "date":"2023-02-12"
    fromCurrency: Joi.string().uppercase().length(3).required(),
    toCurrency: Joi.string().uppercase().length(3).required(),
    amount: Joi.number().precision(2).required(),
    date: Joi.date().format("YYYY-MM-DD").raw().required()

})