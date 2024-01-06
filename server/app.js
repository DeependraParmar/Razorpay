import express from "express";
import {config} from "dotenv";
import cors from "cors";

const app = express();
export default app;
app.use(cors({
    origin: "http://localhost:5173"
}));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

config({
    path: "./config/config.env"
})

import paymentRouter from "./routes/paymentRoutes.js"

app.use("/api", paymentRouter);


app.get("/api/getkey", (req,res) => {
    res.status(200).json({
        key: process.env.RAZORPAY_API_KEY
    })
})