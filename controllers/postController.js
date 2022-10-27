const { pool } = require('../db.js');
const Post = require('../models/postModel')


const getPosts = async (req, res) => {
    console.log("hi")
    const studentList = await Post.getPostFromDB()
    return studentList ? res.status(200).send(studentList) : res.sendStatus(404);
}

const addPost = async (req, res) => {
    const {post_description, student_id} = req.body
    console.log(req.body)
    const studentList = await Post.addPostFromDB(post_description, student_id)
    return studentList ? res.status(200).send(studentList) : res.sendStatus(404);
}
module.exports = {
    getPosts,
    addPost
}