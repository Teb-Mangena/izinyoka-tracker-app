import express from "express";
import { ENV } from "./config/env.js";

const app = express();
const { port } = ENV;

app.get('/', (req,res) => {
  res.send("Izinyoka app backend started");
});

app.listen(port, (req,res) => {
  console.log("App listening on port", port);
});