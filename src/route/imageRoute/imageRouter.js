const express= require("express")
const multer= require("multer")
const imageRouter = express.Router()
const {getTextFromAnImage}= require("../../controller/image/imageController")

const upload= multer({dest:"upload/"})
imageRouter.get("/doc/get-text",upload.single("image"), getTextFromAnImage
)
module.exports={imageRouter}