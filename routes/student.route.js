const express=require("express")
const router=express.Router()

const stydentConroller=require('../controller/student.controller')

router.route('/student')
.get(stydentConroller.getStudent)
.post(stydentConroller.createStudent)
router.route('/student/:id')
.get(stydentConroller.getStudentById)

module.exports=router;