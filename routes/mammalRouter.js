import express from "express";
import { mammals } from "../data/animal.js";

const mammalsRouter = express.Router();

mammalsRouter.get("/",(req,res) => {
   res.send("Welcome to MammalsPage")
 })

mammalsRouter.get('/animal/:name', (req, res) => {
    const animalName = req.params.name; //access route parameters
        let animal;
    
        for (let i = 0; i < mammals.length; i++) {
            if (mammals[i].name === animalName) {
                animal = mammals[i];
                break; 
            }
        }

    if (animal) {
        res.render('pages/animal.ejs', {animal});
    } else {
        res.status(404).send('Animal not found');
    }
});


/*mammalsRouter.get("/echidna",(req,res) => {
   
 })

mammalsRouter.get("/tasmanianDevil",(req,res) => {
   res.send("MammalsPage")
 })

mammalsRouter.get("/quokka",(req,res) => {
   res.send("MammalsPage")
})*/

export default mammalsRouter