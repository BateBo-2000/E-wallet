const Statics = require('../model/Statistics')
const {dateFormater} = require('./exchange_rates_controller')
exports.getCountbyReciever = async (req, res, next) =>{ 
    /* retruns how much time you have spent money and where (ordered)*/
    let {user_id, start_date, end_date} = req.body
    let stat = new Statics(user_id*1)
    stat = await stat.getRecieverCount(start_date, end_date)
    let result = [['transactions made','reciever']]
    stat.forEach(element => {
        result.push([Object.values(element)[0], Object.values(element)[1]])
    });
    console.log(result)
    res.json(result).status(200)
    
}
exports.getSpendingByReciever = async (req, res, next) =>{

    let {user_id} = req.body
    let stat = new Statics(user_id*1)
    stat = await stat.getSpendingByReciever()
    console.log(stat)
    let result = [['amount','currency','spent at']]
    stat.forEach(element => {
        let amount = Object.values(element)[0] ? Object.values(element)[0].toFixed(2) : Object.values(element)[0]
        let currency = Object.values(element)[1]
        let reciever = Object.values(element)[2]
        result.push([amount, currency, reciever])
    });
    console.log(result)
    res.json(result).status(200)
    
}
exports.getSpending = async (req, res, next) =>{

    let {user_id, start_date, end_date, step} = req.body

    let startDate = new Date(start_date)
    let endDate = new Date(end_date)
    let stat = new Statics(user_id*1)
    
    //temp dates for the search in the interval
    let sDate = startDate
    let eDate = dateSetter(sDate,step)
    let result = [['date','amount','currency']]
    let temp
    while(sDate.getTime()<eDate.getTime() && sDate.getTime() < endDate.getTime()){
        //do stuff
        temp = await stat.searchSumByDate(dateFormater(sDate),dateFormater(eDate))
        /* the sql returns name that cannot be written so im suing this way to read from the obj (it returns 'SUM(amount)' as a name of the value)*/
       
        let amount = Object.values(temp)[0] ? Object.values(temp)[0].toFixed(2) : Object.values(temp)[0]
        let currency = Object.values(temp)[1] 
        result.push([dateFormater(sDate),amount,currency])
        
        
        //change for the algorithm
        sDate = new Date(eDate)  
        eDate = dateSetter(sDate,step)
        
    }
    console.log(result)
    res.json(result).status(200)
}

//get step by step (day/week/month) values between the start and end dates
function dateSetter(datestr,step){
    let date = new Date(datestr)
    if(step == 'month'){
        date.setMonth(date.getMonth()+1)
    }else if( step == 'week'){
        date.setDate(date.getDate()+7)
    }else {
        date.setDate(date.getDate()+1)
    }
    return date
}
