import express from 'express';
import mammalsRouter from './routes/mammalRouter.js';
import birdsRouter from './routes/birdsRouter.js'
import {allAnimals,homeContent} from './data/animal.js';
import reptilesRouter from './routes/reptilesRouter.js';
import * as path from "path";

const app = express ();
const __dirname = path.resolve();

app.set("views",path.join(__dirname,"views"));
app.use(express.static(path.join(__dirname,"public")));
app.set("view engine","ejs");

import birds from './data/animal.js'; // import the birds data

app.get('/', (req, res) => {
    res.render("pages/home",{
        animals : allAnimals, //display all animals in sidebar
        content : homeContent, //maincontent
        bodyClass : "home"
    })
                         
});

app.get('/animal/:name', (req, res) => {
        const animalName = req.params.name; //access route parameters
        let animal;
    
        for (let i = 0; i < allAnimals.length; i++) {
            if (allAnimals[i].name === animalName) {
                animal = allAnimals[i];
                break; 
            }
        }

    if (animal) {
        res.render('pages/animal.ejs', {animal});
    } else {
        res.status(404).send('Animal not found');
    }
});

app.get('/birds', (req, res) => {
    const onlyBirds = allAnimals.filter(animal => animal.type === "Bird");
    res.render('pages/birds.ejs', { birds: onlyBirds });
});

app.use("/mammals",mammalsRouter)
app.use("/reptiles",reptilesRouter)
app.use("/birds",birdsRouter);
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});


