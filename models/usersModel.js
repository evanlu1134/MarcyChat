const {pool} = require("../db.js");

class UserModel {
    static getAllUsersFromDB(){
        return pool.query('SELECT * FROM users2 ORDER BY id DESC LIMIT 1').then(results => { console.log("Hi",results.rows[0]); return results.rows[0].first })

    };

    static getSingleUserFromDB = (id) => {
        return pool
            .query(
                'SELECT * FROM users2 WHERE id = $1', [id]).then(results => { return results.rows[0] })

    };

    static createUserFromDb(first,last,email,password){
        // const hashedPassword = bcrypt.hash(password, 10)
     
        return pool.query('INSERT INTO users2 (first, last, email, password) VALUES ($1,$2,$3,$4) RETURNING * ', [first,last,email,password]).then(results => { return results.rows })
    };


    static getUserFromDB = (email) => {
        return pool
            .query(
                'SELECT * FROM users2 WHERE email = $1', [email]).then(results => { return results.rows[0] })
    };

    static getUserFromDBByID = (id) => {
        return pool
            .query(
                'SELECT * FROM users2 WHERE id = $1', [id]).then(results => { return results.rows[0] })
    };
}

function getCurrentDateJson() {
    return new Date().toJSON();
}

module.exports = UserModel;