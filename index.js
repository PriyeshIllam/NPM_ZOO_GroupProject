import express from 'express';
import mammalsRouter from './routes/mammalRouter.js';
import * as path from "path";
import birdsRouter from './routes/birdsRouter.js';
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

 app.use("/mammals", mammalsRouter);
 app.use("/birds",birdsRouter);
 
 app.listen(PORT, () => console.log(`Listening on port : ${PORT}`));