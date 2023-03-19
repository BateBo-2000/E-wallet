const db = require('../database/connectionPool')
class User {
    user_id
    egn
    id_card_number
    first_name
    mid_name
    last_name
    address
    date_of_birth
    role
    secret_question
    secret_answer
    email
    
    async addUser({egn,first_name,mid_name,last_name,address,date_of_birth,secret_question,secret_answer,email}){
        let sql = `INSERT INTO paypal.users
        (
        egn,
        first_name,
        mid_name,
        last_name,
        address,
        date_of_birth,
        secret_question,
        secret_answer,
        email)
        VALUES
        ("${egn}","${first_name}","${mid_name}","${last_name}","${address}","${date_of_birth}","${secret_question}","${secret_answer}","${email}")`;

        const newUser = await db.execute(sql)
        return newUser[0]
    }
    async deleteUser(id){
        let sql = `DELETE FROM users WHERE user_id=${id};`
        const [deletedUser, _] = await db.execute(sql)
        return deletedUser
    }
    async changeField({user_id,egn,first_name,mid_name,last_name,address,date_of_birth,role,secret_question,secret_answer,email}){
        date_of_birth = date_of_birth.toISOString().slice(0,10)
        let sql = `UPDATE paypal.users SET
        egn = "${egn}",
        first_name = "${first_name}",
        mid_name = "${mid_name}",
        last_name = "${last_name}",
        address = "${address}",
        date_of_birth = "${date_of_birth}",
        secret_question = "${secret_question}",
        secret_answer = "${secret_answer}",
        email = "${email}"
        WHERE user_id = ${user_id};`
            const [changer, _] = await db.execute(sql)
        return changer
    }
    async getByUsername(username){ //tested
        let sql = `SELECT * FROM paypal.login_data WHERE username = "${username}";`
        const user = await db.execute(sql)
        return user[0]
    }
    async getById(id){
        let sql = `SELECT * FROM paypal.users WHERE user_id = ${id};`
        const user = await db.execute(sql)
        return user[0]
        //used just to get the info for the user
    }
    async getLoginTryInfo(id){
        let sql = `SELECT * FROM paypal.account_logins WHERE user_id = ${id};`
        const user = await db.execute(sql)
        return user[0]
    }
    async getEmail(id){
        let sql = `SELECT email FROM paypal.users WHERE user_id = ${id};`
        const user = await db.execute(sql)
        return user[0]
    }
}
module.exports = User