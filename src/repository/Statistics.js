const db = require('../app/connectionPool')
class Statics {
    constructor(user_id){
        this.user_id = user_id
    }
    //transcur
    async searchSumByDate(start_date,end_date){ 
        //returns all the sum of the spenging between the dates for the user
        //Basically how much is spent durning this period
        let sql = `SELECT SUM(amount), currency_name 
        from paypal.transcur 
        WHERE date_done BETWEEN '${start_date} 00:00:00' 
        AND '${end_date} 00:00:00' 
        AND user_id = ${this.user_id}; `
        const data = await db.execute(sql)
        return data[0][0]
    }
    async getSpendingByReciever(){ 
        //gets how much have you spent on something durning this period
        let sql = 
        `SELECT SUM(amount),currency_name ,reciever_id
        FROM paypal.transcur 
        WHERE  user_id = ${this.user_id} 
        GROUP BY reciever_id
        HAVING SUM(amount) !=0`
        const data = await db.execute(sql)
        return data[0]
    }
    async getRecieverCount(start_date, end_date){ 
        //gets how much have you spent on something durning this period
        let sql = `SELECT 
        COUNT(*), reciever_id
        FROM paypal.transcur
        WHERE user_id = ${this.user_id}
        AND date_done BETWEEN '${start_date} 00:00:00' 
        AND '${end_date} 00:00:00'
        GROUP BY reciever_id
        HAVING COUNT(*) > 0`;
        const data = await db.execute(sql)
        return data[0]
    }
}
module.exports = Statics