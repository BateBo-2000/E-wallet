const db = require('../database/connectionPool')
class BalanceHistory{
    constructor(balance_id){

    }
    async record(balance_id, user_id, currency_id, amount_after_change, change_amount, reason_for_change){
        /*after every transaction you 
            select * from balance where user_id = user_id
        then write it down in the balance_history with the reason_for_change = transaction receiver
        */
        let sql = `INSERT INTO paypal.balance_history
        (balance_id, currency_id, amount_after_change, change_amount, reason_for_change)
        VALUES
        (${balance_id},${currency_id},${amount_after_change}, ${change_amount},'${reason_for_change}');`
        const [record, _] = await db.execute(sql)
        return record
    }
    async getHistory(balance_id){
        // returns all of the records for the balance_id provided
        let sql = `select * from paypal.balance_history WHERE balance_id = ${balance_id};`
        const [history, _] = await db.execute(sql)
        return history
    }
    async getHistoryByDate(start_date, end_date){
        //gets history by date
        //from date to date
        //date fromat YYYY-MM-DD
        let sql = `select * from paypal.balance_history 
        where
        date_of_update between '${start_date}' and '${end_date}';`
        const [history, _] = await db.execute(sql)
        return history
    }

}
module.exports = BalanceHistory