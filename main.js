const {getInTime} = require('./functions/exchange_rates')
const {dateFormater} = require('./functions/exchange_rates')
async function main(){
    
    console.log(dateFormater('2022-10-14'))
}
main()