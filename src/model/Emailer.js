require('dotenv').config()
const nodemailer = require('nodemailer')
exports.sendMail = (reciever, title, text) =>{

    return new Promise((resolve, reject)=>{
        /* here we define the transporter - where the program goes and send s the mail from */
        const transporter = nodemailer.createTransport({    
            service:process.env.EMAIL_PLATFORM,
            auth:{
                user:process.env.EMAIL_USERNAME,
                pass:process.env.EMAIL_APP_PASSWORD
            }
        })
        /* here we define mail */
        const mail_config = {
            to: reciever,
            subject: title,
            text: text
        }
        /* sending the mail and returning the promise result */
        transporter.sendMail(mail_config, (error, info)=>{
            if(error){
                console.log(error)
                return reject({message:  "error has occured"})
            }
            return resolve({message: "Email Sent"})
        })
    })
}