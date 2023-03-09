const express=require("express")
const mongoose=require("mongoose")
const cors=require("cors")
require("dotenv").config()
const app=express()
const bodyParser = require("body-parser");

app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

//app.use(express.json())
//app.use(express.urlencoded());
const router1=require("./Routers/BookRouters")
const router2=require("./Routers/CatigoriesRouters")
const router3=require("./Routers/UserRouters")
app.use("/Book",router1)
app.use("/Catigorie",router2)
app.use("/User",router3)

mongoose.connect(process.env.mongo_url)
.then((result)=>app.listen(4040,()=>console.log("server is running")))
.catch((error)=>console.log(error))

app.get("/",(req,res)=>{
    res.send("<h2> Bienvneue dans notre app Express</h2>");
 });