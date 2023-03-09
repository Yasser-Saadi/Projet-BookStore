const Categorie=require("../Models/CatigoriesModel")

const getallCategories=async()=>{return await Categorie.find()}
const getCategoriebyid=async(id)=>{return await Categorie.findById({_id:id})}
const ajouteCategorie=async(tmp)=>{return await Categorie.create(tmp)}
const deleteCategorie=async(id)=>{return await Categorie.deleteOne({_id:id})}
const UpdateCategoriebyid=async(tmp)=>{return await Categorie.findByIdAndUpdate(tmp._id,tmp)}

module.exports=
{
    getallCategories,
    getCategoriebyid,
    ajouteCategorie,
    deleteCategorie,
    UpdateCategoriebyid
}