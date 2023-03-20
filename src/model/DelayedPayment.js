const db = require('../app/connectionPool')
class DelayedPayment{
    constructor(user_id){
        this.user_id=user_id
    }
    async createReminder(text,date,isReocurrning=false,remind_interval=null){
        //creates a reminder
        let sql = `INSERT INTO paypal.reminders(
            user_id,
            remind,
            remind_date,
            isReocurrning,
            remind_interval
            )
            VALUES
            (${this.user_id},
            "${text}",
            "${date}",
            ${isReocurrning},
            "${remind_interval}"
            );`
        const [result, _] = await db.execute(sql)
        return result
    }
    async getReminders(){
        //get all of the user's reminders
        let sql = `select * from paypal.reminders WHERE user_id = ${this.user_id};`
        const [result, _] = await db.execute(sql)
        return result
    }
    async deleteReminder(reminder_id){
        //deletes the reminder
        let sql = `DELETE from paypal.reminders where reminder_id = ${reminder_id}`
        const [result, _] = await db.execute(sql)
        return result[0]
    }
}
module.exports = DelayedPayment