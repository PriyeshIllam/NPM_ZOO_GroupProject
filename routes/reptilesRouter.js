import express from 'express';
import allAnimals from '../data/animal.js'; // Ensure correct path

const router = express.Router();

// Filter only reptiles
const reptiles = allAnimals.filter(animal => animal.type.toLowerCase() === 'reptile');

router.get('/', (req, res) => {
    res.render('pages/reptiles', {allAnimals, reptiles,
      title : "Reptiles Page",
    }); // Pass both variables
});

export default router;
