const { json } = require('stream/consumers')
const pool = require('./database/connectionPool')

async function getUser(){
    return pool.execute("SELECT * FROM paypal.users;")   
}
let a = async ()=>{
        const result = await getUser()
        console.log(result)

}
a()


