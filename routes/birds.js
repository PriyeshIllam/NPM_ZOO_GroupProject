import express from 'express';
import { allAnimals } from '../data/animal.js'; // Ensure correct path

const router = express.Router();

// Filter only reptiles
const birds = allAnimals.filter(animal => animal.type.toLowerCase() === 'bird');

router.get('/', (req, res) => {
    res.render('pages/birds', {allAnimals, birds,
      title : "Birds Page",
    }); // Pass both variables
});

export default router;