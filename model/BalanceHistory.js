const db = require('../database/connectionPool')
class BalanceHistory{
    constructor(balance_id){

    }
    async record(){
        /*after every transaction you 
            select * from balance where user_id = user_id
        then write it down in the balance_history with the reason_for_change = transaction receiver
        */
    }
    async getHistory(){
        //gets the history
    }
    async getHistoryByDate(){
        //gets history by date
    }

}
module.exports = BalanceHistory