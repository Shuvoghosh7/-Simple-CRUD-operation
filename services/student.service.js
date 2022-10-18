const Student=require("../model/Students")

exports.getStudentService=async () =>{
    const result=await Student.find({})
    return result;
}
exports.createStudentService= async(data)=>{
    const result=await Student.create(data)
    return result;
}