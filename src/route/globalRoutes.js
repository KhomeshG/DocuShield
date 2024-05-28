const express= require("express")
const globalRouter=express.Router()
const {imageRouter}= require("./imageRoute/imageRouter")

globalRouter.get("/api/v1/test",async(req,res)=>{

    return res.json({message:"Working Fine"})

})
globalRouter.use("/api/v1/",imageRouter)

module.exports={globalRouter}