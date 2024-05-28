
const {createWorker} = require("tesseract.js")

const path = require("path");
const { text } = require("express");

const getTextFromAnImage= async (req,res)=>{
    try {
    const inputImg= req.file
    console.log(inputImg.path)
    if(!inputImg){

        return res.status(400).send({message:"Image Not found"})
    }
   
   
    const worker = await createWorker(['eng',"hin"]);

    (async () => {
    const data = await worker.recognize(inputImg.path);
    console.log(data.data.text)
    const op=data.data.text
   
    
    await worker.terminate();
    return op
    })().then((text)=>{
        console.log(text)
        return res.status(200).json({data:text})
    })
        

        
        } catch (error) {
            console.log(error)
            return res.status(500).send({message:"Internal Server error"})
        }
}

module.exports={getTextFromAnImage}