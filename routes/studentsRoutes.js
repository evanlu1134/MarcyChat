const express = require("express")
const studentController = require('../controllers/studentController')
const router = express.Router()

//routes with http methods
router.get('/', studentController.getStudents)
router.post('/', studentController.studentsPost)


module.exports = router