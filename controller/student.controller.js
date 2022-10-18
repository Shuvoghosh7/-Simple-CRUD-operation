const { createStudentService } = require("../services/student.service")

exports.getStudent=async()=>{
    try {
        
    } catch (error) {
        
    }
}
exports.createStudent=async(req,res)=>{
    try {
        const result=await createStudentService(req.body)
        res.status(200).json({
            stauts: "success",
            massage: "Data inside successfully",
            data: result
          })
    } catch (error) {
        res.status(400).json({
            stauts:"fail",
            message: "Data is not inserted",
            error : error.message
          })
    }
}
