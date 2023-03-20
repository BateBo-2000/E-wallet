require('dotenv').config()
const {getLatest} = require('../model/ExchangeRates')
const {getInTime} = require('../model/ExchangeRates')
const {convert} = require('../model/ExchangeRates')

exports.getLatestFluctuations = async (req, res)=>{         /*return the currency exchage rate fot today*/
    let {baseCurrency, currencyArray} = req.body
    let data = await getLatest(currencyArray, baseCurrency, process.env.APILAYER_KEY)
    res.json(data).status(200)
}
exports.getThisWeekFluctuations = async (req, res)=>{     /*return the currency exchage rate fot this week*/
    let end_date = new Date()
    let temp_date = new Date().setDate(new Date().getDate()-7)
    let start_date = new Date(temp_date).toISOString()                         /* 7 days before the current date*/
    let {baseCurrency, currencyArray} = req.body

    let data = await getInTime(currencyArray, baseCurrency, process.env.APILAYER_KEY, start_date, end_date,'/fluctuation')
    res.json(data).status(200)
}
exports.getLast30DaysFluctuations = async (req, res)=>{      /*return the currency exchage rate fot this month*/
    let end_date = new Date()
    let temp_date = new Date().setDate(new Date().getDate()-30)
    let start_date = new Date(temp_date).toISOString()                         /* 30 days before the current date*/
    
    let {baseCurrency, currencyArray} = req.body
    let data = await getInTime(currencyArray, baseCurrency, process.env.APILAYER_KEY, start_date, end_date,'/fluctuation')
    res.json(data).status(200)
}
exports.getThisYearFluctuations = async (req, res)=>{       /*return the currency exchage rate fot this year*/
    let end_date = new Date()
    let temp_date = new Date().setDate(new Date().getDate()-360)
    let start_date = new Date(temp_date).toISOString()                        /* 364 days before the current date*/
    let {baseCurrency, currencyArray} = req.body

    let data = await getInTime(currencyArray, baseCurrency, process.env.APILAYER_KEY, start_date, end_date,'/fluctuation')
    res.json(data).status(200)
}
exports.getCustomFluctuations = async (req, res)=>{          /*return the currency exchage rate fot customisible time*/

    let {start_date,end_date,baseCurrency,currencyArray}=req.body
    let data = await getInTime(currencyArray, baseCurrency, process.env.APILAYER_KEY, start_date, end_date,'/fluctuation')
    res.json(data).status(200)
}
exports.getThisWeekTimeseries = async (req, res)=>{     /*return the currency exchage rate fot this week*/
    let end_date = new Date()
    let temp_date = new Date().setDate(new Date().getDate()-7)
    let start_date = new Date(temp_date).toISOString()                         /* 7 days before the current date*/
    let {baseCurrency, currencyArray} = req.body

    let data = await getInTime(currencyArray, baseCurrency, process.env.APILAYER_KEY, start_date, end_date,'/timeseries')
    res.json(data).status(200)
}
exports.getLast30DaysTimeseries = async (req, res)=>{      /*return the currency exchage rate fot this month*/
    let end_date = new Date()
    let temp_date = new Date().setDate(new Date().getDate()-30)
    let start_date = new Date(temp_date).toISOString()                         /* 30 days before the current date*/
    let {baseCurrency, currencyArray} = req.body

    let data = await getInTime(currencyArray, baseCurrency, process.env.APILAYER_KEY, start_date, end_date,'/timeseries')
    res.json(data).status(200)
}
exports.getThisYearTimeseries = async (req, res)=>{       /*return the currency exchage rate fot this year*/

    let end_date = new Date()
    let temp_date = new Date().setDate(new Date().getDate()-360)
    let start_date = new Date(temp_date).toISOString()                        /* 364 days before the current date*/
    let {baseCurrency, currencyArray} = req.body

    let data = await getInTime(currencyArray, baseCurrency, process.env.APILAYER_KEY, start_date, end_date,'/timeseries')
    res.json(data).status(200)
}
exports.getCustomTimeseries = async (req, res)=>{          /*return the currency exchage rate fot customisible time*/

    let {start_date,end_date,baseCurrency,currencyArray}=req.body
    let data = await getInTime(currencyArray, baseCurrency, process.env.APILAYER_KEY, start_date, end_date,'/timeseries')
    res.json(data).status(200)
}
exports.converter = async (req, res)=>{    

    let {date, fromCurrency, toCurrency, amount} = req.body
    let data = await convert(fromCurrency,toCurrency,amount,date,process.env.APILAYER_KEY)
    res.json(data).status(200)
}