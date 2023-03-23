const schedule = require('node-schedule')
const DelayedPayments = require('../repository/DelayedPayment')
const User = require('../repository/User')
const emailer = require('../repository/Emailer')

exports.startReminder = async (req, res) => {

    //add in db
    let reminder = new DelayedPayments(req.body.user_id)
    result = await reminder.createReminder(req.body.text, req.body.start_date, true, '')

    /*job's name is saved as the id of the reminder in the database for ease of access */
    const jobname = result.insertId+"" //to convert it to string faster
    //create the reccuring interval
    const rule = new schedule.RecurrenceRule();
    const {second, minute, hour, date, month, year, DayOfWeek} = req.body
        //sets the recurrance rule
    if(typeof second !== "undefined") rule.second = second*1
    if(typeof minute !== "undefined") rule.second = minute*1
    if(typeof hour !== "undefined") rule.hour = hour*1
    if(typeof date !== "undefined") rule.date = date*1
    if(typeof month !== "undefined") rule.month = month*1
    if(typeof year !== "undefined") rule.year = year*1
    if(typeof DayOfWeek !== "undefined") rule.DayOfWeek = DayOfWeek*1
    //get the other stuff
    const title = `Your E-wallet reminder: ${req.body.title}`
    const text = req.body.text
    //get the email
    let email = new User()
    email = await email.getEmail(req.body.user_id)
    
    //addinto the scheduler
    schedule.scheduleJob(jobname, rule, async function (){
        //mail
        await emailer.sendMail(email,title, text)
        //console for less ptsd
        console.log('email sent job name = '+jobname)
    });
    
    res.status(200).json({result, rule})


}
exports.createReminder = async(req, res) => {
    /**
     * Creates a reminder 
     * Saves it in the database 
     * When the rimider is compleated it deletes it from the db
     */
    //check the date if it is correct
    let now = new Date()
    let checkdate = new Date(req.body.start_date)
    if(now >= checkdate) {
        res.status(400).json({message: "cant set reminders for the past ;)"})
    }else{
        //add in db
        let reminder = new DelayedPayments(req.body.user_id)
        result = await reminder.createReminder(req.body.text, req.body.start_date)
        //add in scheduler
        let email = new User()
        email = await email.getEmail(req.body.user_id)
        const jobname = result.insertId+"" //generating job name
        const title = `Your E-wallet reminder: ${req.body.title}`
        const text = req.body.text
        schedule.scheduleJob(jobname, req.body.start_date, async function (){
            //mail
            await emailer.sendMail(email,title, text)
            //delete from db
            reminder.deleteReminder(result.insertId)
            //console for less ptsd
            console.log('email sent')
        });
        res.status(200).json(result)
    }
    
}
exports.getReminders = async (req, res) => {
    //get from database
    let user_id = req.body.user_id
    let reminder = new DelayedPayments(user_id)
    reminder = await reminder.getReminders()
    res.status(200).send(reminder)
}
exports.deleteReminder = (req, res) => {
    /**
     * Here first the reminder is stopped 
     * Then it is removed from the db
     */
    //stop
    schedule.cancelJob(req.body.reminder_id+"")
    //remove from db
    let reminder = new DelayedPayments(req.body.user_id)
    reminder = reminder.deleteReminder(req.body.reminder_id)
    res.status(200).send('Done')
}
