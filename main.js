require('dotenv').config()
const {convert} = require('./functions/exchange_rates')

async function main(){
    
    let data = await convert('USD','EUR',10_000,new Date(),process.env.APILAYER_KEY)
    console.log(data)
}
main()