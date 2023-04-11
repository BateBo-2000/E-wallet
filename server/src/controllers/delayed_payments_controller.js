const schedule = require('node-schedule')
const DelayedPayments = require('../repository/DelayedPayment')
const User = require('../repository/User')
const cronValidator = require('cron-validator');
const emailer = require('../repository/Emailer')

exports.startReminder = async (req, res) => {
    const title = `Your E-wallet reminder: ${req.body.title}`
    const text = req.body.text
    const cron = req.body.cron
    //add in db
    let reminder = new DelayedPayments(req.body.user_id)
    const date = formatDate(req.body.start_date)
    console.log(text)
    result = await reminder.createReminder(title, text, date, true, cron)

    /*job's name is saved as the id of the reminder in the database for ease of access */
    const jobname = result.insertId+"" //to convert it to string faster
    //get the other stuff
    
    
    //get the email
    let email = new User()
    email = await email.getEmail(req.body.user_id)
    
    
    //checking the cron expression
    if (cronValidator.isValidCron(cron)) {
        //addinto the scheduler
        schedule.scheduleJob(jobname, cron, async function (){
            //mail
            await emailer.sendMail(email,title, text)
            //console for less ptsd
            console.log('email sent job name = '+jobname)
        });
        return res.status(200).json({result, cron}) 
    } 
    res.status(400).json({error: "invalid cron expression"})
    
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
        const title = `Your E-wallet reminder: ${req.body.title}`
        const text = req.body.text
        //add in db
        let reminder = new DelayedPayments(req.body.user_id)
        result = await reminder.createReminder(title, req.body.text, req.body.start_date)
        //add in scheduler
        let email = new User()
        email = await email.getEmail(req.body.user_id)
        const jobname = result.insertId+"" //generating job name
        const date = formatDate(req.body.start_date)
        console.log(text)

        schedule.scheduleJob(jobname, date, async function (){
            //mail
            await emailer.sendMail(email,title, text)
            //delete from db
            reminder.deleteReminder(result.insertId)
            //console for less ptsd
            //added it in the sendMail part
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

const formatDate = (dateString) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    return `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')} ${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}
