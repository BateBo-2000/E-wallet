const db = require('../database/connectionPool')
class Balance{
    constructor(user_id){
        this.user_id = user_id
    }
    async getBalance(){
        //returns the balance from the balcur view in format:- amount, currency 
    }
    async updateBalance(amount){
        // Use Update to change just the amount when making transaction
    }
    async make(currency){
        // get the currency id then its just in sert statement
        
    }


}
module.exports = Balance