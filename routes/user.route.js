const express=require("express")
const router=express.Router()

const userController=require('../controller/user.controller')

router.post('/user/signup',userController.singup)
router.post('/user/login',userController.login)

module.exports=router;