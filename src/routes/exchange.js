require('dotenv').config()
const express = require ('express')
const {getLatest} = require('./../controllers/exchange_rates_controller')
const {getInTime} = require('./../controllers/exchange_rates_controller')
const {convert} = require('./../controllers/exchange_rates_controller')
const {authenticate} = require('../app/authorization middleware/authorization_service')
let routerExchange = express.Router()
/* this router is for currency exchange rates */
/* idk if i should make every currency different route so for now its just 'exchange-rates'*/

routerExchange.use(function stamp(req,res,next){
    console.log('exchange router used')
    next()
})          
/*
req.body
.currencyArray  format: ['BGN',"USD"]    type: string[]
.baseCurrency   format: 'BGN'            type: string
.start_date     format: '2023-03-11'     type: date   
.end_date       format: '2023-03-11'     type: date
*/

routerExchange
.post('/latest', authenticate,async (req, res)=>{         /*return the currency exchage rate fot today*/
    let {baseCurrency, currencyArray} = req.body
    let data = await getLatest(currencyArray, baseCurrency, process.env.APILAYER_KEY)
    res.json(data).status(200)
})
.post('/fluctuation/this-week', authenticate,async (req, res)=>{     /*return the currency exchage rate fot this week*/
    let end_date = new Date()
    let temp_date = new Date().setDate(new Date().getDate()-7)
    let start_date = new Date(temp_date).toISOString()                         /* 7 days before the current date*/
    let {baseCurrency, currencyArray} = req.body

    let data = await getInTime(currencyArray, baseCurrency, process.env.APILAYER_KEY, start_date, end_date,'/fluctuation')
    res.json(data).status(200)
})
.post('/fluctuation/last-30-days', authenticate,async (req, res)=>{      /*return the currency exchage rate fot this month*/
    let end_date = new Date()
    let temp_date = new Date().setDate(new Date().getDate()-30)
    let start_date = new Date(temp_date).toISOString()                         /* 30 days before the current date*/
    
    let {baseCurrency, currencyArray} = req.body
    let data = await getInTime(currencyArray, baseCurrency, process.env.APILAYER_KEY, start_date, end_date,'/fluctuation')
    res.json(data).status(200)
})
.post('/fluctuation/this-year', authenticate,async (req, res)=>{       /*return the currency exchage rate fot this year*/
    let end_date = new Date()
    let temp_date = new Date().setDate(new Date().getDate()-360)
    let start_date = new Date(temp_date).toISOString()                        /* 364 days before the current date*/
    let {baseCurrency, currencyArray} = req.body

    let data = await getInTime(currencyArray, baseCurrency, process.env.APILAYER_KEY, start_date, end_date,'/fluctuation')
    res.json(data).status(200)
})
.post('/fluctuation/custom', authenticate,async (req, res)=>{          /*return the currency exchage rate fot customisible time*/

    let {start_date,end_date,baseCurrency,currencyArray}=req.body
    let data = await getInTime(currencyArray, baseCurrency, process.env.APILAYER_KEY, start_date, end_date,'/fluctuation')
    res.json(data).status(200)
})
.post('/timeseries/this-week', authenticate,async (req, res)=>{     /*return the currency exchage rate fot this week*/
    let end_date = new Date()
    let temp_date = new Date().setDate(new Date().getDate()-7)
    let start_date = new Date(temp_date).toISOString()                         /* 7 days before the current date*/
    let {baseCurrency, currencyArray} = req.body

    let data = await getInTime(currencyArray, baseCurrency, process.env.APILAYER_KEY, start_date, end_date,'/timeseries')
    res.json(data).status(200)
})
.post('/timeseries/last-30-days', authenticate,async (req, res)=>{      /*return the currency exchage rate fot this month*/
    let end_date = new Date()
    let temp_date = new Date().setDate(new Date().getDate()-30)
    let start_date = new Date(temp_date).toISOString()                         /* 30 days before the current date*/
    let {baseCurrency, currencyArray} = req.body

    let data = await getInTime(currencyArray, baseCurrency, process.env.APILAYER_KEY, start_date, end_date,'/timeseries')
    res.json(data).status(200)
})
.post('/timeseries/this-year', authenticate,async (req, res)=>{       /*return the currency exchage rate fot this year*/

    let end_date = new Date()
    let temp_date = new Date().setDate(new Date().getDate()-360)
    let start_date = new Date(temp_date).toISOString()                        /* 364 days before the current date*/
    let {baseCurrency, currencyArray} = req.body

    let data = await getInTime(currencyArray, baseCurrency, process.env.APILAYER_KEY, start_date, end_date,'/timeseries')
    res.json(data).status(200)
})
.post('/timeseries/custom', authenticate,async (req, res)=>{          /*return the currency exchage rate fot customisible time*/

    let {start_date,end_date,baseCurrency,currencyArray}=req.body
    let data = await getInTime(currencyArray, baseCurrency, process.env.APILAYER_KEY, start_date, end_date,'/timeseries')
    res.json(data).status(200)
})
.post('/converter', authenticate,async (req, res)=>{    

    let {date, fromCurrency, toCurrency, amount} = req.body
    let data = await convert(fromCurrency,toCurrency,amount,date,process.env.APILAYER_KEY)
    res.json(data).status(200)
})

module.exports = routerExchange;
//should i make a request for every currency .?.