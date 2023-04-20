require('dotenv').config()
const {getInTime} = require('../repository/ExchangeRates')
const {convert} = require('../repository/ExchangeRates')


exports.getCustomFluctuations = async (req, res)=>{          /*return the currency exchage rate fot customisible time*/

    let {start_date,end_date,baseCurrency,currencyArray}=req.body
    let data = await getInTime(currencyArray, baseCurrency, process.env.APILAYER_KEY, start_date, end_date,'/fluctuation')
    res.json(data).status(200)
}
exports.getCustomTimeseries = async (req, res)=>{          /*return the currency exchage rate fot customisible time*/

    let {start_date,end_date,baseCurrency,currencyArray}=req.body
    let data = await getInTime(currencyArray, baseCurrency, process.env.APILAYER_KEY, start_date, end_date,'/timeseries')
    res.json(data).status(200)
}
exports.converter = async (req, res)=>{    
    try {
        let {date, fromCurrency, toCurrency, amount} = req.body
        let data = await convert(fromCurrency,toCurrency,amount,date,process.env.APILAYER_KEY)
        res.json(data).status(200)
    } catch (error) {
        res.json({message:'Something went wrong!'}).status(400)
    }
    
}