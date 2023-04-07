require('dotenv').config()
const bcrypt = require('bcrypt')
const User = require('../repository/User')
const Logger = require('../repository/Logger')
const {createToken} = require('../app/authorization middleware/authorization_service')
exports.Login = async (req, res) =>{
    /*  use compare passwords (bcrypted - with salts /note have to alter databse)
        when comparing passwords timestamp it in account_logins if username matches
    */
    let {username, password} = req.body
    let logger = new Logger(username,password)
    let userData = await logger.getLoginDataByUsername()
    /*check if we have found the user by the username*/
    if(typeof userData === "undefined") return res.status(404).json({message:'Invalid username!'})    
    /*404 if not found */
    let hashedPassword = userData.password
    let loginTryStatus
    try{
        if(await bcrypt.compare(password, hashedPassword)){
            loginTryStatus = "Logged in successfully" 
            const payload = {user_id:userData.user_id, role:userData.userRole}
            res.status(200).json({message: "Success", token:createToken(payload, process.env.ACCESS_TOKEN_SECRET)})        
        }else{
            loginTryStatus = "Tryed to log in with incorrect password" 
            res.status(401).json({message: "Invalid password"})
        }
    }catch{
        loginTryStatus = "Tryed to log but server error has occured" 
        res.sendStatus(500)
    }
    logger.recordLoginTry(loginTryStatus,userData.user_id)
}
exports.Register = async (req, res) =>{
    let {username, password} = req.body
    let hashedPassword = await bcrypt.hash(password, process.env.SALT_ROUNDS*1)

    try{
        let user = new User()                           
        user = await user.addUser(req.body)
        let logger = new Logger(username,hashedPassword)
        logger = await logger.insertUserLoginData(user.insertId)  
        res.json({message: "SUCCESS"}).status(200)
    }catch (err){
        res.json({message: "Something went wrong on the server!"}).status(400)
    }
    

}
