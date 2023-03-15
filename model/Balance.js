const db = require('../database/connectionPool')
class Balance{
    constructor(user_id){
        this.user_id = user_id
    }
    async getBalanceByUserID(){
        let sql = `Select * FROM balance WHERE user_id=${id};`
        const [balance, _] = await db.execute(sql)
        return balance
    }
    async updateBalance(amount, balance_id){
        //adds a value to the existing balance
        let sql = `UPDATE paypal.balance SET balance = balance + ${amount} WHERE balance_id = ${balance_id};`
        const [update, _] = await db.execute(sql)
        return update

    }
    async createBalance(currency_id){
        // get the currency id then its just in sert statement
        let sql = `INSERT INTO paypal.balance (user_id,balance,currency_id)VALUES(${this.user_id},0,${currency_id});`
        const [balance, _] = await db.execute(sql)
        return balance
    }


}
module.exports = Balance