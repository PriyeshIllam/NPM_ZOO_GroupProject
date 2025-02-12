import express from 'express';
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
 app.listen(PORT, () => console.log(`Listening on port : ${PORT}`));