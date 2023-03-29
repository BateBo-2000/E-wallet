const db = require('../app/connectionPool')
class Logger{
    constructor(username, password){
        this.username = username
        this.password = password
    }
    get getUsername() {
        return this.username;
    }
    set changeName(newPassword) {
        this.password = newPassword;
    }
    async getLoginDataByUsername(){
        let sql = `Select * from login_data WHERE username="${this.username}" LIMIT 1`
        const user = await db.execute(sql)
        return user[0][0]
    }
    async insertUserLoginData(user_id){


        let sql = `INSERT INTO paypal.login_data(user_id,username,password,userRole)VALUES(${user_id},"${this.username}","${this.password}","user");`
        const user = await db.execute(sql)
        return user[0]
    }
    async recordLoginTry(status,userid){    /*When somebody trys to log in with the username this gunction is called and it is written when the user has logged or why he didnt login*/
        let sql = `INSERT INTO paypal.account_logins(user_id,login_try)VALUES(${userid},"${status}");`
        const user = await db.execute(sql)
        return user[0]
    }
}
module.exports = Logger