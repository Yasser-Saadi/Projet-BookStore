const Book=require("../Services/BookServices")


const getallBooks=async(req,res)=>{
    try{
       const result= await Book.getallBooks()
        res.status(200).json(result)
    }catch(error)
    {
        res.status(500).json({msg:error})
    }
}
const getBookbyid=async(req,res)=>{
    const id=req.params.id
    try{
        const result= await Book.getBookbyid(id)
         res.status(200).json(result)
      }catch(error)
      {
          res.status(404).json({error})
      }
    
}
const ajouteBook= async(req,res)=>{
    const tmp=req.body
    try{
        console.log(tmp)
        await Book.ajouteBook(tmp)
        
         res.status(201).json({msg:"Book bien ajoute"})
      }catch(error)
      {
        console.log(error)
          res.status(500).json({error})
      }
    
}
const deleteBook=async (req,res)=>{
    const id=req.params.id
    try{
        const result= await Book.deleteBook(id)
         res.status(200).json({msg:"Book supprimer"})
      }catch(error)
      {
          res.status(500).json({error})
      }
    
}
const UpdateBook=async (req,res)=>{
    try{
        const result= await Book.UpdateBookbyid(req.body)
         res.status(200).json({msg:"Book updated"})
      }catch(error)
      {
          res.status(500).json({error})
      }
    
}

module.exports=
{
    getallBooks,
    getBookbyid,
    ajouteBook,
    deleteBook,
    UpdateBook
}
