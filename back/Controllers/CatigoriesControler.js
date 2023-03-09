const Catigorie=require("../Services/CatigoriesServices")


const getallCatigories=async(req,res)=>{
    try{
       const result= await Catigorie.getallCategories()
        res.status(200).json(result)
    }catch(error)
    {
        res.status(500).json({msg:error})
    }
}
const getCatigoriebyid=async(req,res)=>{
    
    try{
        const result= await Catigorie.getCategoriebyid(req.params.id)
         res.status(200).json(result)
      }catch(error)
      {
          res.status(404).json({error})
      }
    
}
const ajouteCatigorie= async(req,res)=>{
    try{
        await Catigorie.ajouteCategorie(req.body)
         res.status(201).json({msg:"Catigorie bien ajoute"})
      }catch(error)
      {
          res.status(500).json({msg:"Catigorie non ajoute"})
      }
    
}
const deleteCatigorie=async (req,res)=>{
  
    try{
        const result= await Catigorie.deleteCategorie(req.params.id)
         res.status(200).json({msg:"Catigorie supprimer"})
      }catch(error)
      {
          res.status(500).json({error})
      }
    
}
const UpdateCatigorie=async (req,res)=>{
    try{
        const result= await Catigorie.UpdateCategoriebyid(req.body)
         res.status(200).json({msg:"Catigorie updated"})
      }catch(error)
      {
          res.status(500).json({error})
      }
    
}

module.exports=
{
    getallCatigories,
    getCatigoriebyid,
    ajouteCatigorie,
    deleteCatigorie,
    UpdateCatigorie
}
