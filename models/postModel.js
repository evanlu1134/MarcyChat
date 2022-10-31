const { pool } = require('../db.js')

class Post {
    static getPostFromDB() {
        return pool.query('SELECT * FROM posts JOIN users ON posts.user_id = users.user_id ORDER BY post_id;').then(results => { return results.rows })
    }
    static addPostFromDB(...args) {
        return pool.query('WITH inserted AS (INSERT INTO posts (post_description, user_id) VALUES ($1, $2) RETURNING *;) SELECT * FROM inserted JOIN users ON inserted.user_id = users.user_id', args).then(results => { return results.rows })
    }
}

module.exports = Post