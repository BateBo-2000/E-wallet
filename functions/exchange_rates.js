const axios = require('axios') ;

//URL creator
function symbolsToUrl(symbolsArr){
  let symbol=''
  symbolsArr.forEach(element => {
    symbol += element+`%2C`
  }) 
  return symbol.slice(0,-3)
}

//Date formater
function dateFormater(date){
  let formDate = new Date(date)
  return formDate.toISOString().split('T')[0]
}

//Ready functions for export 
//get latest - works
async function getLatest(currencyArray, baseCurrency, apikey){
  try {
    const res = await axios.get('https://api.apilayer.com/exchangerates_data/latest',{
    headers: {
      "apikey":apikey
    },
    params: {
      "symbols": symbolsToUrl(currencyArray),
      "base":baseCurrency
    }
  })
    return res.data
  } catch (error) {
    console.log(error)
  } 
}

//get custom timelapse
async function getInTime(currencyArray, baseCurrency, apikey, start_date, end_date,resourceUrl){
  try {
    const res = await axios.get(resourceUrl,{
    headers: {
      "apikey":apikey
    },
    params: {
      "symbols": symbolsToUrl(currencyArray),
      "base":baseCurrency,
      "start_date":dateFormater(start_date),
      "end_date":dateFormater(end_date),

    }
  })
    return res.data
  } catch (error) {
    console.log(error)
  } 
}
//get fluctuation

module.exports = {
  getLatest,
  getInTime,
  dateFormater
}
