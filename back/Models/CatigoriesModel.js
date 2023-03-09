const mongoose=require("mongoose")

const CtegorieSchema=mongoose.Schema({
    nom:String
})

const Catigorie=mongoose.model("Catigorie",CtegorieSchema)
module.exports=Catigorie