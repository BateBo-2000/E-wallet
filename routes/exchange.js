require('dotenv').config()
const express = require ('express')
const {getLatest} = require('./../functions/exchange_rates')
const {getInTime} = require('./../functions/exchange_rates')
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
.post('/latest',async (req, res)=>{         /*return the currency exchage rate fot today*/
    let baseCurrency = req.body.baseCurrency
    let currencyArray = req.body.currencyArray
    let data = await getLatest(currencyArray, baseCurrency, process.env.APILAYER_KEY)
    res.json(data).status(200)
})
.post('/fluctuation/this-week',async (req, res)=>{     /*return the currency exchage rate fot this week*/
    let end_date = new Date()
    let temp_date = new Date().setDate(new Date().getDate()-7)
    let start_date = new Date(temp_date).toISOString()                         /* 7 days before the current date*/
    let baseCurrency = req.body.baseCurrency
    let currencyArray = req.body.currencyArray
    let data = await getInTime(currencyArray, baseCurrency, process.env.APILAYER_KEY, start_date, end_date,'/fluctuation')
    res.json(data).status(200)
})
.post('/fluctuation/last-30-days',async (req, res)=>{      /*return the currency exchage rate fot this month*/
    let end_date = new Date()
    let temp_date = new Date().setDate(new Date().getDate()-30)
    let start_date = new Date(temp_date).toISOString()                         /* 30 days before the current date*/
    let baseCurrency = req.body.baseCurrency
    let currencyArray = req.body.currencyArray
    let data = await getInTime(currencyArray, baseCurrency, process.env.APILAYER_KEY, start_date, end_date,'/fluctuation')
    res.json(data).status(200)
})
.post('/fluctuation/this-year',async (req, res)=>{       /*return the currency exchage rate fot this year*/
    let end_date = new Date()
    let temp_date = new Date().setDate(new Date().getDate()-360)
    let start_date = new Date(temp_date).toISOString()                        /* 364 days before the current date*/
    let baseCurrency = req.body.baseCurrency                                                
    let currencyArray = req.body.currencyArray
    let data = await getInTime(currencyArray, baseCurrency, process.env.APILAYER_KEY, start_date, end_date,'/fluctuation')
    res.json(data).status(200)
})
.post('/fluctuation/custom',async (req, res)=>{          /*return the currency exchage rate fot customisible time*/
    let start_date = req.body.start_date                                              /*starting date*/
    let end_date = req.body.end_date                                                    /*end date*/
    let baseCurrency = req.body.baseCurrency                                            
    let currencyArray = req.body.currencyArray
    let data = await getInTime(currencyArray, baseCurrency, process.env.APILAYER_KEY, start_date, end_date,'/fluctuation')
    res.json(data).status(200)
})
.post('/timeseries/this-week',async (req, res)=>{     /*return the currency exchage rate fot this week*/
    let end_date = new Date()
    let temp_date = new Date().setDate(new Date().getDate()-7)
    let start_date = new Date(temp_date).toISOString()                         /* 7 days before the current date*/
    let baseCurrency = req.body.baseCurrency
    let currencyArray = req.body.currencyArray
    let data = await getInTime(currencyArray, baseCurrency, process.env.APILAYER_KEY, start_date, end_date,'/timeseries')
    res.json(data).status(200)
})
.post('/timeseries/last-30-days',async (req, res)=>{      /*return the currency exchage rate fot this month*/
    let end_date = new Date()
    let temp_date = new Date().setDate(new Date().getDate()-30)
    let start_date = new Date(temp_date).toISOString()                         /* 30 days before the current date*/
    let baseCurrency = req.body.baseCurrency
    let currencyArray = req.body.currencyArray
    let data = await getInTime(currencyArray, baseCurrency, process.env.APILAYER_KEY, start_date, end_date,'/timeseries')
    res.json(data).status(200)
})
.post('/timeseries/this-year',async (req, res)=>{       /*return the currency exchage rate fot this year*/
    let end_date = new Date()
    let temp_date = new Date().setDate(new Date().getDate()-360)
    let start_date = new Date(temp_date).toISOString()                        /* 364 days before the current date*/
    let baseCurrency = req.body.baseCurrency                                                
    let currencyArray = req.body.currencyArray
    let data = await getInTime(currencyArray, baseCurrency, process.env.APILAYER_KEY, start_date, end_date,'/timeseries')
    res.json(data).status(200)
})
.post('/timeseries/custom',async (req, res)=>{          /*return the currency exchage rate fot customisible time*/
    let start_date = req.body.start_date                                              /*starting date*/
    let end_date = req.body.end_date                                                    /*end date*/
    let baseCurrency = req.body.baseCurrency                                            
    let currencyArray = req.body.currencyArray
    let data = await getInTime(currencyArray, baseCurrency, process.env.APILAYER_KEY, start_date, end_date,'/timeseries')
    res.json(data).status(200)
})

module.exports = routerExchange;
//should i make a request for every currency .?.