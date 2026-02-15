import express from "express";
import cors from "cors";
import morgan from "morgan";

import { ENV } from "./config/env.js";
import { connectDB } from "./config/db.js";

import { clerkMiddleware } from '@clerk/express';
import AuthRoute from './routes/user.route.js';

const app = express();
const port = ENV.PORT;

// middlewares
app.use(express.json());
app.use(cors());
app.use(clerkMiddleware());
app.use(morgan('dev'));

app.get('/', (req,res) => {
  res.send("Izinyoka app backend started");
});

app.use('/api/auth', AuthRoute);

connectDB().then(() => {
  app.listen(port, (req,res) => {
    console.log("App listening on port", port);
  });
})