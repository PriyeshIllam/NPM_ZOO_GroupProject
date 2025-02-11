import express from 'express';
 const PORT = 3001;
 const app = express ();
 app.get("/",(req,res) => {
    res.send("Zoo Assignment")
 })
 app.listen(PORT, () => console.log(`Listening on port : ${PORT}`));