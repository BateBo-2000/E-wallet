const User = require('../model/User')
exports.getInfo = async (req, res, next) =>{

    let id = req.query.id *1 
    let user = new User()
    user = await user.getById(id)    //the response from the querry
    res.json(user[0]).status(200)
}
exports.deleteUser = async (req, res, next) =>{

    let user = new User()
    let id = req.query.id *1        //neat way to ensure it is string not a number
    user = await user.deleteUser(id)
    res.status(200).json(user)  //if we have found the id

    
}
exports.changeField = async (req, res, next) =>{
    let user = new User()  
    let id = req.query.id *1
    let oldData = await user.getById(id)   
    let updatedData = Object.assign(oldData[0], req.body) 
    user = await user.changeField(updatedData)  // column value id
    res.status(200).json(user)
}
exports.getLoginTry = async (req, res, next) =>{
    let id = req.body.id *1 
    let user = new User()
    user = await user.getLoginTryInfo(id)
    if(user == null) res.send('no login atempts').status(404)
    res.status(200).json(user)
}