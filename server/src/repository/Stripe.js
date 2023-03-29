//HERE I HAVE TO CONNECT STRIPE
class Stripe{
    constructor(){
        //add stripe stuff
    }

    async importMoney(amount,currency){
        /**
         * custom payment link for the exact money i will put in
         * 
         * product= `Put ${amount} ${currency} in your e-wallet`
         */
        return true
    }
    async returnMoney(amount,currency){
        /**
         * money: in stripe you can refund a custom amount 
         * reaseon for stripe: in stripe a requested by user or other reaseon can be set
         * message: a message can be sett
         * 
         * Basically the logic is that when the user withdraws money we say to stripe to refund him that amount from the account
         * in order to refund the money there has to be a transaction 
         * so basically the user pays 0.01 currency and gets refunded 0.01+amount in currency
         */
        return true
    }

}
module.exports = Stripe