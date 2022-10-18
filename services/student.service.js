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

exports.updateStudentService=async(id,data)=>{
    const result =await Student.updateOne({_id:id},data,{
        runValidators:true
    })
    return result;
}