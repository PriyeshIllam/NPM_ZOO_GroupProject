import express from "express";

const mammalsRouter = express.Router();

mammalsRouter.get("/",(req,res) => {
   res.send("Welcome to MammalsPage")
 })

mammalsRouter.get("/echidna",(req,res) => {
   res.send("MammalsPage")
 })

mammalsRouter.get("/tasmanian Devil",(req,res) => {
   res.send("MammalsPage")
 })

mammalsRouter.get("/quokka",(req,res) => {
   res.send("MammalsPage")
})

export default mammalsRouter
