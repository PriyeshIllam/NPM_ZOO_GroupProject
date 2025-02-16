import express from "express";
import { birds,birdsContent } from "../data/animal.js";

const birdsRouter = express.Router();

birdsRouter.get("/",(req,res) => {
   res.render("pages/home",{
      animals : birds,
      content : birdsContent,
      bodyClass : "birds"
   })
 })

birdsRouter.get('/animal/:name', (req, res) => {
    const animalName = req.params.name; //access route parameters
        let animal;
    
        for (let i = 0; i < birds.length; i++) {
            if (birds[i].name === animalName) {
                animal = birds[i];
                break; 
            }
        }

    if (animal) {
        res.render('pages/animal.ejs', {animal});
    } else {
        res.status(404).send('Animal not found');
    }
});

export default birdsRouter;
