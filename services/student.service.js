const Student=require("../model/Students")

exports.getStudentService=async () =>{
    const result=await Student.find({})
    return result;
}
exports.createStudentService= async(data)=>{
    const result=await Student.create(data)
    return result;
}

exports.getStudentServiceById=async(id)=>{
    const result=await Student.findById({_id:id})
    return result;
}