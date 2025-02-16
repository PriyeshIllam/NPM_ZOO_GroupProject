import express from "express";
import { reptiles,reptilesContent } from "../data/animal.js";

const reptilesRouter = express.Router();

reptilesRouter.get("/",(req,res) => {
   res.render("pages/home",{
      animals : reptiles,
      content : reptilesContent,
      bodyClass : "reptiles"
   })
 })

reptilesRouter.get('/animal/:name', (req, res) => {
    const animalName = req.params.name; //access route parameters
        let animal;
    
        for (let i = 0; i < reptiles.length; i++) {
            if (reptiles[i].name === animalName) {
                animal = reptiles[i];
                break; 
            }
        }

    if (animal) {
        res.render('pages/animal.ejs', {animal});
    } else {
        res.status(404).send('Animal not found');
    }
});

export default reptilesRouter