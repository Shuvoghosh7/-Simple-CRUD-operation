const { createStudentService, getStudentService, getStudentServiceById, updateStudentService, deleteStudentService } = require("../services/student.service")

exports.getStudent = async (req, res) => {
    try {
        const result = await getStudentService()
        res.status(200).json({
            stauts: "success",
            massage: "Get Data successfully",
            data: result
        })

    } catch (error) {
        res.status(400).json({
            stauts: "fail",
            message: "Data is not Find",
            error: error.message
        })
    }
}
exports.createStudent = async (req, res) => {
    try {
        const result = await createStudentService(req.body)
        res.status(200).json({
            stauts: "success",
            massage: "Get Data successfully",
            data: result
        })
    } catch (error) {
        res.status(400).json({
            stauts: "fail",
            message: "Data is not inserted",
            error: error.message
        })
    }
}

exports.getStudentById = async (req, res) => {
    try {
        const { id } = req.params
        const result = await getStudentServiceById(id)
        res.status(200).json({
            stauts: "success",
            massage: "Data inside successfully",
            data: result
        })

    } catch (error) {
        res.status(400).json({
            stauts: "fail",
            message: "Data is not Find",
            error: error.message
        })
    }
}

exports.updateStudentData=async(req,res)=>{
    try {
        const { id } = req.params
        const result =await updateStudentService(id,req.body)
        res.status(200).json({
            stauts: "success",
            massage: "successfully update Data",
            data: result
        })
    } catch (error) {
        res.status(400).json({
            stauts: "fail",
            message: "Data is not Update",
            error: error.message
        })
    }
}

exports.deleteStudentData=async(req,res)=>{
    try {
        const{id}=req.params;
        const result=await deleteStudentService(id)
        if(!result.deletedCount){
            return res.status({
              stauts: "fail",
              error: "Could not delete the Data",
            })
          }
          res.send(result)

    } catch (error) {
        res.status(400).json({
            stauts: "fail",
            message: "Data is not Delete",
            error: error.message
        })
    }
}