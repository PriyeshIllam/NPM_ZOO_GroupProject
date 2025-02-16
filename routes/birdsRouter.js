import express from "express"
import {birds,birdsContent} from "../data/animal.js"
const birdsRouter = express.Router();

birdsRouter.get("/",(req,res) => {// birds.render()
    res.render("pages/home",{
        bodyClass:"birds",
        animals : birds,
        content : birdsContent
    })
   

})

birdsRouter.get("/feathers",(req,res) => {
    res.send("strong features")
})

birdsRouter.get("/beak",(req,res) => {
    res.send("have a toothless beak and jaw")
})
export default  birdsRouter


