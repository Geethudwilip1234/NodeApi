const con = require('../database/connector')

module.exports = class login {
    constructor(userid, password) {
        this.userid = userid;
        this.password = password;
    }
    static fetchUser(userid) {
        return con.execute('SELECT * FROM `user`')
    }
}