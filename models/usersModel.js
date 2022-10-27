const {pool} = require("../db.js");

class UserModel {
    static getAllUsersFromDB(){
        return pool.query('SELECT * FROM students ORDER BY student_id DESC LIMIT 1').then(results => {return results.rows[0].first })

    };

    static getSingleUserFromDB = (id) => {
        return pool
            .query(
                'SELECT * FROM students WHERE student_id = $1', [id]).then(results => { return results.rows[0] })

    };

    static createUserFromDb(first,last,email,password){
 
        return pool.query('INSERT INTO student_id (first_name, last_name, email, password) VALUES ($1,$2,$3,$4) RETURNING * ', [first,last,email,password]).then(results => { return results.rows })
    };


    static getUserFromDB = (email) => {
        return pool
            .query(
                'SELECT * FROM students WHERE student_id = $1', [email]).then(results => { return results.rows[0] })
    };

    static getUserFromDBByID = (id) => {
        return pool
            .query(
                'SELECT * FROM students WHERE password = $1', [id]).then(results => { return results.rows[0] })
    };
}


module.exports = UserModel;