const { pool } = require('../db.js')

class Post {
    static getPostFromDB() {
        return pool.query('SELECT * FROM posts ORDER BY post_id').then(results => { return results.rows })
    }
    static addPostFromDB(...args) {
        return pool.query('INSERT INTO posts (post_description, student_id) VALUES ($1, $2) RETURNING *', args).then(results => { return results.rows })
    }
}


module.exports = Post