import express from "express";
import bodyParser from "body-parser";
import colors from "colors";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoute.js";
import researcherRoutes from "./routes/researcherRoute.js";

// import cors from 'cors';

dotenv.config();

// database connection
connectDB();

const app = express()


// middleware

// app.use(cors());
app.use(express.json());
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(express.urlencoded({extended:false}));

// routes

app.use('/api/v1/auth', authRoutes);
app.use('/api/researchers',researcherRoutes);

// api

app.get('/', (req, res) => {
      res.send("<h1>Welcome to our app</h1>")
})

const PORT = process.env.PORT || 8000; 

app.listen(PORT, () => {
    console.log(`Server Running on ${PORT}`.bgCyan.white)
})