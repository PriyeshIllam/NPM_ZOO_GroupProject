// import express from "express"

// const birdsRouter = express.Router();

// birdsRouter.get("/",(req,res) => {// birds.render()
//     res.render("pages/featurepage",{
//         bodyclass:"birds",
//         title : "welcome to birds  page",
//         subtitle : 
// "Birds are a group of warm-blooded vertebrates constituting the class Aves, characterised by feathers, toothless beaked jaws, the laying of hard-shelled eggs, a high metabolic rate, a four-chambered heart, and a strong yet lightweight skeleton"

//     })
//     res.send("from the bird's page")

// })

// birdsRouter.get("/feathers",(req,res) => {
//     res.send("strong features")
// })

// birdsRouter.get("/beak",(req,res) => {
//     res.send("have a toothless beak and jaw")
// })
// export default  birdsRouter


import express from "express";

const birdsRouter = express.Router();

birdsRouter.get("/", (req, res) => {
  res.send("Welcome to BirdsPage");
});

birdsRouter.get("/crosswary", (req, res) => {
  res.send("Explore the fascinating wildlife of Australia!");
});

birdsRouter.get("/kookaburra", (req, res) => {
  res.send("Birds are a group of warm-blooded vertebrates");
});

birdsRouter.get("/yellow tailed black cockatoo", (req, res) => {
  res.send("Birds are a group of warm-blooded vertebrates");
});

export default birdsRouter;
