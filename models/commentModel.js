const { pool } = require('../db.js')

class Comment {
    static getCommentFromDB() {
        return pool.query('SELECT * FROM comments ORDER BY student_id').then(results => { return results.rows })
    }
    static addCommentToDB(...args) {
        return pool.query('INSERT INTO comments (commentary, post_id, student_id) VALUES ($1, $2, $3) RETURNING *', args).then(results => { return results.rows })
    }
}


module.exports = Comment