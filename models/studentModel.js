const { pool } = require('../db.js')

class Students {
    static getStudentFromDB() {
        return pool.query('SELECT * FROM students ORDER BY student_id').then(results => { return results.rows })
    }
    static studentPostFromDB(...args) {
        return pool.query('INSERT INTO students (student_id, first_name, last_name, username, password) VALUES ($1, $2, $3, $4, $5) RETURNING *', args).then(results => { return results.rows })
    }
}


module.exports = Students