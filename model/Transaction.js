const db = require('../database/connectionPool')
class Transaction{
    constructor(user_id){
        this.user_id = user_id
    }

    async makeTransaction(reciever, amount, currency_id){
        let sql = `INSERT INTO paypal.transactions
        (user_id,
        reciever,
        amount,
        currency_id)
        VALUES
        (${this.user_id},
        "${reciever}",
        ${amount},
        ${currency_id});`
        const [transaction, _] = await db.execute(sql)
        return transaction
    }
    async searchById(trans_id){
        let sql = `SELECT * from transcur where trans_id = ${trans_id}`
        const [transaction, _] = await db.execute(sql)
        return transaction
    }
    async deleteTransaction(){// admin stuff

    }
    async getAll(){
        let sql = `SELECT * from transcur where user_id = ${this.user_id}`
        const [transaction, _] = await db.execute(sql)
        return transaction
    }
    async searchByMoney(amount, dependency){
        let sql = `SELECT * from transcur where amount ${dependency} ${amount} AND user_id = ${this.user_id}`
        const [transaction, _] = await db.execute(sql)
        return transaction
    }
    async searchByReciever(reciever){
        let sql = `SELECT * from transcur where reciever = "${reciever}" AND user_id = ${this.user_id}`
        const [transaction, _] = await db.execute(sql)
        return transaction
    }
    async searchByDate(start_date, end_date){
        let sql = `SELECT * from transcur where user_id = ${this.user_id} AND date_done between "${start_date}" and "${end_date}";`
        const [transaction, _] = await db.execute(sql)
        return transaction
    }
    
}
module.exports = Transaction