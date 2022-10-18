const express=require("express")
const router=express.Router()

const studentConroller=require('../controller/student.controller')

router.route('/student')
.get(studentConroller.getStudent)
.post(studentConroller.createStudent)
router.route('/student/:id')
.get(studentConroller.getStudentById)
.patch(studentConroller.updateStudentData)

module.exports=router;