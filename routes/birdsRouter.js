import express from "express"

const birdsRouter = express.Router();

birdsRouter.get("/",(req,res) => {// birds.render()
    res.render("pages/featurepage",{
        bodyclass:"birds",
        title : "welcome to birds  page",
        subtitle : 
"Birds are a group of warm-blooded vertebrates constituting the class Aves, characterised by feathers, toothless beaked jaws, the laying of hard-shelled eggs, a high metabolic rate, a four-chambered heart, and a strong yet lightweight skeleton"

    })
    res.send("from the bird's page")

})

birdsRouter.get("/feathers",(req,res) => {
    res.send("strong features")
})

birdsRouter.get("/beak",(req,res) => {
    res.send("have a toothless beak and jaw")
})
export default  birdsRouter


