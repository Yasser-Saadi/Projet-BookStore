
const mongoose=require("mongoose")

const UserShema=mongoose.Schema({
    FName:String,
    LName:String,
    Email:String,
    password:String
  
    
})

const User=mongoose.model("User",UserShema)
module.exports=User