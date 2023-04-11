const colors = require('colors');
const schedule = require('node-schedule')
const emailer = require('../repository/Emailer')
const DelayedPayments = require('../repository/DelayedPayment')

/**This function should start the jobs when server is restarted */
exports.startScheduledJobs = async () => {
    try {
        //the date is saved as 2023-04-11T18:19:00.000Z and i want it as 2023-04-11 21:21:00
        const formatDate = (dateString) => {
            const date = new Date(dateString);
            const year = date.getFullYear();
            const month = date.getMonth() + 1;
            const day = date.getDate();
            const hours = date.getHours();
            const minutes = date.getMinutes();
            const seconds = date.getSeconds();
            return `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')} ${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
          };
        // Fetch the data from the database
        const fetchAllReminders = async () => {
            //get from database
            let reminder = new DelayedPayments(0)
            reminder = await reminder.getAllReminders()
            return reminder
        }
        const reminders = await fetchAllReminders()
        
        // Loop through the reminders and schedule each job
        reminders.forEach((reminder) => {
            const jobName = reminder.reminder_id+""
            let time 
            if(reminder.remind_interval !== 'null'){
                time = reminder.remind_interval
            }else{
                time = formatDate(reminder.remind_date)
            }

            console.log(time)
            
            
            //starts the job regardless if it is recurrning or not
            schedule.scheduleJob(jobName, time , async () => {
                await emailer.sendMail(reminder.email, reminder.title, reminder.text);
                console.log(`Email sent for job ${jobName}`);
            })
        })
        //console.log(schedule.scheduledJobs)
        console.log('Reminders Started'.blue)
    } catch (error) {
        console.log('Error occured when starting reminders'.red, error)
    }
  }
  
