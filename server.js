import express from 'express'
import bodyParser from 'body-parser';
import cors from 'cors';
import jobRoute from "./routes/job-route.js"
import ConnectDB from './config/db.js';
import dotenv from "dotenv"
dotenv.config();
const PORT = process.env.PORT || 8000;

const app = express();
app.use(cors())
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json({extended:true}))


ConnectDB();

app.get('/',(req,res)=>{
    res.send('backend server runs');
})

app.use("/job",jobRoute)

app.listen(PORT,()=>{
    console.log(`app run on ${PORT}`)
})