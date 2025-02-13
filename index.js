import express from 'express';
import mammalsRouter from './routes/mammalRouter.js';
import allAnimals from './data/animal.js';
import * as path from "path";

const PORT = 3000;
const app = express ();
const __dirname = path.resolve();

app.set("views",path.join(__dirname,"views"));
app.use(express.static(path.join(__dirname,"public")));
app.set("view engine","ejs");

app.get('/', (req, res) => {
    res.render('pages/home.ejs', { allAnimals });
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
        res.render('pages/animal.ejs', { animal });
    } else {
        res.status(404).send('Animal not found');
    }
});


app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});

 
 app.use("/mammals", mammalsRouter);
 
 app.listen(PORT, () => console.log(`Listening on port : ${PORT}`));
