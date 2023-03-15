const db = require('../database/connectionPool')
class Currency{
    constructor(currencyName){
        this.currencyName=currencyName
    }
    async getId(){
        //searches the name and returns the id of the currency
    }
    async add(currency_id){
        //adds currency
    }
    async remove(currency_id){
        //removes currency
    }
}
module.exports = Currency