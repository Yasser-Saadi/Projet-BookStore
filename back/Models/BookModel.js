
const mongoose=require("mongoose")

const BookShema=mongoose.Schema({
    nom :String,
    description :String,
    isbn :String,
    auteur :String,
    editeur :String,
    date_edition :Date,
    image : String,
    Catigorie:
    {
        type:mongoose.Types.ObjectId,
        ref:"Catigorie"
    }
    
})

const Book=mongoose.model("Book",BookShema)
module.exports=Book