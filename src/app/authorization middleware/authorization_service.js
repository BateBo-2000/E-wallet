require('dotenv').config()
const jwt = require('jsonwebtoken')

function authenticate (req, res, next) {
    //gets the authorization header's value
    const authHeader = req.headers['authorization']
    //if the authorization inst staarting with "Bearer " or is missing return Unauthorized - 401
    if(!authHeader || !authHeader.startsWith('Bearer ')) 
        return res.status(401).json({ message: 'You must provide access token!' });
    //we split the Bearer and the token
    const token = authHeader && authHeader.split(' ')[1] 
    //verifys the token and returns the payload
    const payload = getPayload(token, process.env.ACCESS_TOKEN_SECRET)

    // if token is invalid or contains invalid data
    if(payload == null || payload.user_id == null || payload.role == null)
        return res.status(403).json({ message: 'Invalid access token!' });

        
    req.body = {    //adds the payload as a parameter to the body if there is a body
        ...req.body,
        user_id : payload.user_id,
        role : payload.role
    }
    next()
}

function createToken(payload, secret) {
    
    //basically creates a token
    const token = jwt.sign(
        payload, 
        secret,
        { expiresIn: '1d' } // token expires in 1 day
    )
    return token;
}

function getPayload(token, secret){
    try {
        //decrypting token
        const payload = jwt.verify(token, secret)
        return payload
    } catch { /*no need to catch anything*/ }
    return null
}

module.exports = {authenticate, createToken,getPayload}
