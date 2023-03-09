const express=require("express")
const router=express.Router()
const UserControler=require("../Controllers/UserController")

router.get("/",UserControler.getallUsers)
router.get("/:id",UserControler.getUserbyid)
router.post("/",UserControler.ajouteUser)
router.delete("/:id",UserControler.deleteUser)
router.put("/:id",UserControler.UpdateUser)
router.post("/login",UserControler.loginAdmin)

module.exports=router