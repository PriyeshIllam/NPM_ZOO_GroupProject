import express from 'express';
import Mammals from './data/animal.js';

const PORT = 3001;
const app = express ();
app.get("/",(req,res) => {
   res.send("Zoo Assignment")
})

app.listen(PORT, () => console.log(`Listening on port : ${PORT}`));