const User=require("../model/User")

exports.createUserService=async(userinfo)=>{
    const result=await User.create(userinfo)
    return result;
}

exports.getUserByEmail=async(email)=>{
    return await User.findOne({email})
}