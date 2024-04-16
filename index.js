import express from "express";
const app = express();
import cors from 'cors';
import filmRouter from "./src/routes/film.js";
import filmGroupRouter from "./src/routes/film_group.js"
import userRouter from './src/routes/user.js'
import "dotenv/config";
import mongoose from 'mongoose';

app.use(cors());
app.use(express.json());
app.use(userRouter)
app.use(filmRouter)
app.use(filmGroupRouter)

mongoose.connect(process.env.MONGO_CONNECTION).catch((err)=>{
  console.log({err: `err`})
})
.then(()=>{
  console.log(`connected to DB`)
})

app.listen(process.env.PORT, () => {
  console.log(`App started on port ${process.env.PORT}`);
});