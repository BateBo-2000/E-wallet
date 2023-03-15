const db = require('../database/connectionPool')
class Currency{
    constructor(currencyName){
        this.currencyName=currencyName
    }
    async getId(){
        //searches the name and returns the id of the currency
        let sql = `select * from paypal.currency WHERE currency_name = ${currencyName};`
        const [currency_id, _] = await db.execute(sql)
        return currency_id
    }
    async add(){    //admin only
        //adds currency
    }
    async remove(currency_id){    //admin only
        //removes currency
    }
}
module.exports = Currency