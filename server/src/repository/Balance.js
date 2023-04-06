const db = require('../app/connectionPool')
class Balance{
    constructor(user_id){
        this.user_id = user_id
    }
    async getBalanceByUser(){
        let sql = `Select * FROM paypal.balcur WHERE user_id=${this.user_id};`
        const [balance, _] = await db.execute(sql)
        return balance
    }
    async getBalanceById(balance_id){
        let sql = `Select * FROM paypal.balance WHERE user_id=${this.user_id} AND balance_id = ${balance_id};`
        const [balance, _] = await db.execute(sql)
        return balance
    }
    async updateBalance(amount, balance_id){
        //adds a value to the existing balance
        let sql = `UPDATE paypal.balance SET balance = balance + ${amount} WHERE balance_id = ${balance_id} AND user_id = ${this.user_id};`
        const [update, _] = await db.execute(sql)
        return update

    }
    async createBalance(currency_id){
        // get the currency id then its just in sert statement
        let sql = `INSERT INTO paypal.balance (user_id,balance,currency_id)VALUES(${this.user_id},0,${currency_id});`
        const [balance, _] = await db.execute(sql)
        return balance
    }
    async searchByCurrency(currency_id){
        // gets the first balance by the given currency
        let sql = `Select balance_id from paypal.balcur WHERE user_id = ${this.user_id} and currency_name = "${currency_id}" LIMIT 1`
        const [data, _] = await db.execute(sql)
        return data
    }
    async getCurrencyName(balance_id){
        let sql = `select currency_name from paypal.balcur where balance_id = ${balance_id} AND user_id = ${this.user_id};`
        const [data, _] = await db.execute(sql)
        return data
    }


}
module.exports = Balance