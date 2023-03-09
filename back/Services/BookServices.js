const Book=require("../Models/BookModel")

const getallBooks=async()=>{return await Book.find().populate("Catigorie")}
const getBookbyid=async(id)=>{return await Book.findById({_id:id}).populate("Catigorie")}
const ajouteBook=async(tmp)=>{return await Book.create(tmp)}
const deleteBook=async(id)=>{return await Book.deleteOne({_id:id})}
const UpdateBookbyid=async(tmp)=>{return await Book.findByIdAndUpdate(tmp._id,tmp)}

module.exports=
{
    getallBooks,
    getBookbyid,
    ajouteBook,
    deleteBook,
    UpdateBookbyid
}