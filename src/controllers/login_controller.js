require('dotenv').config()
const User = require('../model/User')
const Logger = require('../model/Logger')
const bcrypt = require('bcrypt')
exports.Login = async (req, res, next) =>{
    /*  use compare passwords (bcrypted - with salts /note have to alter databse)
        when comparing passwords timestamp it in account_logins
    */
    let {username, password} = req.body
    let logger = new Logger(username,password)
    let userData = await logger.getLoginDataByUsername()
    if(userData == null) res.send('invalid username').status(404)
    let hashedPassword = userData[0].password
    
    let loginTryStatus
    try{
        if(await bcrypt.compare(password, hashedPassword)){
            loginTryStatus = "Logged in successfully" 
            res.status(200).send("correct password")        
        }else{
            loginTryStatus = "Tryed to log in with incorrect password" 
            res.status(400).send("wrong password")
        }
    }catch{
        loginTryStatus = "Tryed to log but server error has occured" 
        res.sendStatus(500)
    }
    logger.recordLoginTry(loginTryStatus,userData[0].user_id)


    

}
exports.Register = async (req, res, next) =>{
    let {username, password} = req.body
    let hashedPassword = await bcrypt.hash(password, process.env.SALT_ROUNDS*1)

    let user = new User()                           
    user = await user.addUser(req.body)             //adding the account data
    let logger = new Logger(username,hashedPassword)
    logger = await logger.insertUserLoginData(user.insertId)       //adding the login data    
    logger = {user, logger}
    res.json(logger).status(200)

}
