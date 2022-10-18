const Student=require("../model/Students")


exports.createStudentService= async(data)=>{
    const result=await Student.create(data)
    return result;
}