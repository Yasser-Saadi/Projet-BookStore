const express=require("express")
const router=express.Router()
const BookControler=require("../Controllers/BookControler")

router.get("/",BookControler.getallBooks)
router.post("/",BookControler.ajouteBook)
router.delete("/:id",BookControler.deleteBook)
router.get("/:id",BookControler.getBookbyid)
router.put("/:id",BookControler.UpdateBook)

module.exports=router
