import express from 'express';
import allAnimals from './data/animal.js';
import * as path from "path";
const PORT = 3001;
const app = express ();
const __dirname = path.resolve();

app.set("views",path.join(__dirname,"views"));
app.use(express.static(path.join(__dirname,"public")));
app.set("view engine","ejs");

app.get("/",(req,res) => {
    res.render("pages/home", {
      title : "Welcome to the Bronx zoo",
      bodyClass : "home"
    })
 })

// Route to view details for a specific animal
app.get('/animal/:name', (req, res) => {
    const animalName = req.params.name;
    const animal = allAnimals.find(a => a.name === animalName);
    if (animal) {
        res.render('animal', { animal });
    } else {
        res.status(404).send('Animal not found');
    }
});

 app.listen(PORT, () => console.log(`Listening on port : ${PORT}`));





