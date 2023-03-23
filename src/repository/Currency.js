const db = require('../app/connectionPool')
class Currency{
    constructor(currencyName){
        this.currencyName=currencyName
    }
    async getId(){
        //searches the name and returns the id of the currency
        let sql = `select * from paypal.currency WHERE currency_name = "${this.currencyName}";`
        const [currency_id, _] = await db.execute(sql)
        return currency_id[0]
    }
}
module.exports = Currency