const express=require("express")
const router=express.Router()
const CatogrieControler=require("../Controllers/CatigoriesControler")

router.get("/",CatogrieControler.getallCatigories)
router.post("/",CatogrieControler.ajouteCatigorie)
router.delete("/:id",CatogrieControler.deleteCatigorie)
router.get("/:id",CatogrieControler.getCatigoriebyid)
router.put("/:id",CatogrieControler.UpdateCatigorie)

module.exports=router
