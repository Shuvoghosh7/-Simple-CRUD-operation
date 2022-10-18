const User=require("../model/User")

exports.createUserService=async(userinfo)=>{
    const result=await User.create(userinfo)
    return result;
}