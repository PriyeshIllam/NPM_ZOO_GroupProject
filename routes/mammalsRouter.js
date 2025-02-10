import express from "express";
const mammalsRouter = express.Router();

mammalsRouter.get("/",(req,res) => {
    res.send("MammalsPage")
 })

 export default mammalsRouter