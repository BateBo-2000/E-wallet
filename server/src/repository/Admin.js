const db = require('../app/connectionPool')
const Emailer = require('./Emailer')
const Balance_history = require('./BalanceHistory')
const User = require('./User')
class Admin{
    constructor(admin_id){
        this.admin_id = admin_id
    }
    //used for adding supported currency
    async addCurrency(currency_id,currency_name){
        try{
            let sql = `INSERT INTO paypal.currency (currency_id, currency_name) VALUES (${currency_id},"${currency_name}");`
            const [data, _] = await db.execute(sql)
            //write it down
            await this.wirteChanges("ADDED CURRENCY: this admin executed query:"+sql)
            return ({message: 'SUCCESS'})
        }catch(err){
            await this.wirteChanges("ADDED CURRENCY FAIL: this admin tried to add currency:"+currency_name)
            return err
        }
        
    }
    //used for removing supported currency
    async deleteCurrency(currency_id){

        try {
            let sql = `DELETE from paypal.currency WHERE currency_id= ${currency_id}`
            const [data, _] = await db.execute(sql)
            //write it down
            await this.wirteChanges("DELETED CURRENCY: this admin executed query:"+sql)
            return data
        } catch (error) {
            return error
        }
    }
    //delete user by id
    async deleteUser(user_id){
        try{
            let sql = `DELETE from paypal.users WHERE user_id= ${user_id}`
            const [data, _] = await db.execute(sql)
            //write it down
            await this.wirteChanges("DELETE: this admin executed query:"+sql)
            return data
        } catch (error) {
            return error
        }
    }
    //send mail
    async sendEmail(reciever, title, text){
        try{
            const res = Emailer.sendMail(reciever, title, text)
            await this.wirteChanges(`EMAIL: this admin sent mail ${title} to ${reciever}`)
            return res
        } catch (error) {
            return error
        }
    }
    //used to change the amount of money in the balance
    async changeBalance(new_amount, balance_id){
        try{
            let sql = `UPDATE paypal.balance SET balance = ${new_amount} WHERE balance_id = ${balance_id}`
            const [data, _] = await db.execute(sql)
            //write it down
            await this.wirteChanges("BALANCE CHANGE: this admin executed query:"+sql)
            //get user_id
            sql = 'SELECT user_id FROM balance where balance_id ='+balance_id
            let user_id = await db.execute(sql)
            user_id = user_id[0][0].user_id
            //let user know
            let user = new User()
            this.sendEmail(await user.getEmail(user_id),"Balance change", `Your balance No ${balance_id} has been changed by admin to `+new_amount)
            return ({message: 'SUCCESS'})
        } catch (error) {
            return error
        }
    }
    //used to delete balance of user
    async deleteBalance(balance_id){
        try{
            let sql = `DELETE from paypal.balance WHERE balance_id = ${balance_id}`
            const [data, _] = await db.execute(sql)
            //write it down
            await this.wirteChanges("BALANCE DELETE: this admin executed query:"+sql)
            return ({message: 'SUCCESS'})
        } catch (error) {
            return error
        }
    }
    async updateUserRole(user_id, role){
        console.log(user_id, role)
        try{
            /**
             * this is the way the admins get promoted demoted from other admins
             */
            let sql = `UPDATE paypal.login_data SET userRole = "${role}" WHERE user_id = ${user_id};`
            const [data, _] = await db.execute(sql)
            //write it down
            await this.wirteChanges("UPDATE USER ROLE: this admin executed query:"+sql)
            return ({message: 'SUCCESS'})
        } catch (error) {
            return error
        }
    }
    async customSelect(table, condition){
        try{
            /**
             * the admin selects what to see in the in which table
             * table should be the desired table's name 
             * condition should be the condition after the WHERE
             * the condition is checked to not contain drop delete  or ; for mone security
             */
            let temp = condition.toUpperCase()
            if(temp.includes('DELETE') || temp.includes('DROP') || temp.includes(';')){
                //write in down as attempt to do it
                await this.wirteChanges("error: sql injection detected in condition")
                return "error: sql injection detected in condition"
            }
            temp = table.toUpperCase()
            if(temp.includes('DELETE') || temp.includes('DROP') || temp.includes(';')){
                await this.wirteChanges("error: sql injection detected in table")
                return "error: sql injection detected in table"
            }

            let sql = `Select * FROM ${table} WHERE ${condition};`
            console.log(sql)
            const [data, _] = await db.execute(sql)
            return data
        } catch (error) {
            return error
        }

    }
    //writes all of the admin actions in the db
    async wirteChanges(text){
        try{
            let sql = "INSERT INTO `paypal`.`admin_changes` (`user_id`, `change`) VALUES ("+this.admin_id+",'"+ text+ "');"
            await db.execute(sql)
        } catch (error) {
            return error
        }
    }
}
module.exports = Admin