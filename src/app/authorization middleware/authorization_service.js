const jwt = require('jsonwebtoken')

function auth (req, res, next) {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    if(authHeader == null) return res.sendStatus(401)

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (error, user) => {
        if(error)return res.sendStatus(403)
        req.user = user
        //console.log(`Authorization service used`)
        next()
    })
}

module.exports = {auth}