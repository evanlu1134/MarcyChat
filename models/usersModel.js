const db = require("../db.js");

class UserModel {
    static getAllUsersFromDB = () => {
        return pool
            .query('SELECT * FROM users2 ORDER BY id').then(results => { return results.rows })

    };

    static getSingleUserFromDB = (userId) => {
        return pool
            .query(
                'SELECT * FROM users2 WHERE userId = $1', [userId]).then(results => { return results.rows[0] })

    };

    static createUserFromDB = (...args) => {
        const hashedPassword = bcrypt.hash(password, 10)
        pool.query('INSERT INTO users2 (first,last,email,password) VALUES ($1,$2,$3,$4) RETURNING * ', args).then(results => { return results.rows[0] })
    };


    static getUserFromDB = (email) => {
        return pool
            .query(
                'SELECT * FROM users2 WHERE userId = $1', [email]).then(results => { return results.rows[0] })
    };

    static getUserFromDBByID = (id) => {
        return pool
            .query(
                'SELECT * FROM users2 WHERE userId = $1', [id]).then(results => { return results.rows[0] })
    };
}

function getCurrentDateJson() {
    return new Date().toJSON();
}

module.exports = UserModel;