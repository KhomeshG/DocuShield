const express = require("express");
const mongoose= require("mongoose")
const ejs = require("ejs");
const app = express();
const multer= require("multer")
const {globalRouter}= require("./route/globalRoutes")
//express server

app.use(express.json())

mongoose.connect( "mongodb+srv://khomeshg:P2fQq0WiXcmw12RU@cluster0.6hg8hte.mongodb.net/DB",{
  useNewUrlParser: true,
}) .then(() => console.log("MongoDB is connected"))
.catch((err) => console.log(err));

app.use("/",globalRouter)
const PORT = process.env.PORT || 3000;


app.listen(PORT, () => {
  console.log("Application is running on port", PORT);
});