import express from "express";
import cors from "cors";

import { ENV } from "./config/env.js";
import { connectDB } from "./config/db.js";

import { clerkMiddleware } from '@clerk/express'

const app = express();
const port = ENV.PORT;

// middlewares
app.use(express.json());
app.use(clerkMiddleware());
app.use(cors());

app.get('/', (req,res) => {
  res.send("Izinyoka app backend started");
});

connectDB().then(() => {
  app.listen(port, (req,res) => {
    console.log("App listening on port", port);
  });
})