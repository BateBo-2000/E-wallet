const db = require('../app/connectionPool')
class Transaction{
    constructor(user_id){
        this.user_id = user_id
    }

    async makeTransaction(sender_balance_id,reciever_id, reciever_balance_id, amount, currency_id){ 
    /**
     * one time it timed me out but the error stopped then i restartded pc ERROR: ER_LOCK_WAIT_TIMEOUT, errno: 1205,
     * idk => idc
     */
        let sql = `INSERT INTO paypal.transactions (user_id, sender_balance_id, amount, currency_id, reciever_id, reciever_balance_id ) VALUES (${this.user_id},${sender_balance_id},${amount},${currency_id},${reciever_id},${reciever_balance_id});`
        const [transaction, _] = await db.execute(sql)
        return transaction
    }
    async searchById(trans_id){
        let sql = `SELECT * from paypal.transcur where trans_id = ${trans_id}`
        const [transaction, _] = await db.execute(sql)
        return transaction
    }
    async getAll(){
        let sql = `SELECT * FROM paypal.transcur WHERE user_id = ${this.user_id} ORDER BY trans_id DESC LIMIT 50;`
        const [transaction, _] = await db.execute(sql)
        return transaction
    }
    async searchByMoney(amount, dependency, balance_id){
        let sql = `SELECT * from paypal.transcur where amount ${dependency} ${amount} AND user_id = ${this.user_id} and sender_balance_id = ${balance_id}`
        const [transaction, _] = await db.execute(sql)
        return transaction
    }
    async searchByReciever(reciever_id,balance_id){
        let sql = `SELECT * from paypal.transcur where reciever_id = "${reciever_id}" AND user_id = ${this.user_id} and sender_balance_id = ${balance_id}`
        const [transaction, _] = await db.execute(sql)
        return transaction
    }
    async searchByDate(start_date, end_date, balance_id){
        let sql = `SELECT * from paypal.transcur where user_id = ${this.user_id} AND date_done between "${start_date}" and "${end_date} and sender_balance_id = ${balance_id}";`
        const [transaction, _] = await db.execute(sql)
        return transaction
    }
    async searchByBalance(balance_id){
        let sql = `Select * from paypal.transcur WHERE user_id = ${this.user_id} and sender_balance_id = ${balance_id}`
        const [transaction, _] = await db.execute(sql)
        return transaction
    }
    
}
module.exports = Transaction