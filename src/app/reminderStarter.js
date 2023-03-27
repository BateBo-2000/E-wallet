/**
 * when the server restarts the node schedule is reset
 * this script reads from the table and re-schedules the reminders in node scheduler
 */

const db = require('../app/connectionPool')
const schedule = require('node-schedule')
const emailer = require('../repository/Emailer')



let startReminders = async() => {
   //gets all the reminders
   let sql = `SELECT * from paypal.reminders`
   const [result, _] = await db.execute(sql)
   result.forEach(element => {
       // schedule the element
   });
    

}
module.exports = {startReminders}