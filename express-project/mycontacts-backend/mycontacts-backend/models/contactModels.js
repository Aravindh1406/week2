const mongoose=require("mongoose")
const contactSchema=mongoose.Schema({
    name:{
        type:String,
        required:[true,"Please Add the name"]
    },
    email:{
        type:String,
        required:[true,"Please Add Email"]
    },
    contactNo:{
        type:String,
        required:[true,"Please Add contact Number"]
    }
},{
    timestamps:true
})
module.exports=mongoose.model("Contact",contactSchema)