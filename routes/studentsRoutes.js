const express = require("express")
const studentController = require('../controllers/studentController')
const router = express.Router()


router.get('/', studentController.getStudents)
router.post('/', studentController.studentsPost)




module.exports = router