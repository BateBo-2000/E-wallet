const db = require('../database/connectionPool')
class Transaction{
    
    async makeTransaction(id){
        let sql = `DELETE FROM users WHERE user_id=${id};`
        const [deletedUser, _] = await db.execute(sql)
        return deletedUser
    }
    async getById(trans_id,user_id){
        
    }
    async deleteTransaction(){

    }
    async getByDate(start_date, end_date){

    }
    async getAll(user_id){

    }
    async getByMoreThanMoney(amount){

    }
    async getByLessThanMoney(amount){

    }
    async getByReciever(reciever){

    }
    
}
module.exports = Transaction