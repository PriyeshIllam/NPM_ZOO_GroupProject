import express from "express";
import { mammals,mammalsContent } from "../data/animal.js";

const mammalsRouter = express.Router();

mammalsRouter.get("/",(req,res) => {
   res.render("pages/home",{
      animals : mammals,
      content : mammalsContent,
   })
 })

mammalsRouter.get("/echidna",(req,res) => {
   res.send("MammalsPage")
 })

mammalsRouter.get("/tasmanianDevil",(req,res) => {
   res.send("MammalsPage")
 })

mammalsRouter.get("/quokka",(req,res) => {
   res.send("MammalsPage")
})

export default mammalsRouter