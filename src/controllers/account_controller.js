const User = require('../model/User')
exports.getInfo = async (req, res) =>{


    let user = new User()
    user = await user.getById(req.body.user_id *1 )    //the response from the querry
    res.json(user[0]).status(200)
}
exports.deleteUser = async (req, res) =>{

    let user = new User()                
    user = await user.deleteUser(req.body.user_id *1 )  //neat way to ensure it is string not a number
    res.status(200).json(user)              //if we have found the id
}
exports.changeField = async (req, res) =>{
    let user = new User()  
    let oldData = await user.getById(req.body.user_id *1)   
    let updatedData = Object.assign(oldData[0], req.body) 
    user = await user.changeField(updatedData)  // column value id
    res.status(200).json(user)
}
exports.getLoginTry = async (req, res) =>{
    let user = new User()
    user = await user.getLoginTryInfo(req.body.user_id *1 )
    if(user == null) res.send('no login atempts').status(404)
    res.status(200).json(user)
}