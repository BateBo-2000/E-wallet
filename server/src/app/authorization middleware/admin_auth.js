
function admin_auth(req, res, next){
    if(req.body.role === "admin"){
        next()
    }else{
        res.status(401).json({message: "You are not administrator"})
    }
}

module.exports = {admin_auth}