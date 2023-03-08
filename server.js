require('dotenv').config()
const express = require('express')
const jwt = require('jsonwebtoken')
const app = express()
const port = process.env.PORT || 5000
app.use(express.json())

const test_data = [{
    a:1,
    b:"asdf"
}]
app.get('/test',auth, (req,res)=>{
    res.json(test_data)
})

app.post('/login', (req,res)=>{
    //Authenticate the user
    const username= req.body.username;
    const user = {
        id:0,
        username: username
    }
    
    const token = jwt.sign(user,process.env.ACCESS_TOKEN_SECRET)
    res.json({accessToken: token})
})

function auth (req, res, next) {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    if(authHeader == null) return res.sendStatus(401)

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (error, user) => {
        if(error)return res.sendStatus(403)
        req.user = user
        next()
    })
}


app.listen(5000, () => {console.log(`Server listening on port ${port}`)})