import express from 'express';
import mammalsRouter from './routes/mammalRouter.js';
 const PORT = 3001;
 const app = express ();
 app.get("/",(req,res) => {
    res.send("Zoo Assignment")
 })

 app.use("/mammals", mammalsRouter)
 app.listen(PORT, () => console.log(`Listening on port : ${PORT}`));