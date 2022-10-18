const mongoose=require("mongoose")
const validator=require("validator")


const studentSchema=mongoose.Schema({
    name:{
        type:String,
        trim:true,
        require:true,
        maxLength:100,
    },
    email:{
        type:String,
        lowercase:true,
        validator:[validator.isEmail,"Plese provide a valid Email"]
    },
    address:String,
    contuctNumber:{
        type:String,
        validate: [validator.isMobilePhone, "Please provide a valid contact number"]
    }
},{
    timestamps: true
})

const Students=mongoose.model("Students",studentSchema)
module.exports=Students;