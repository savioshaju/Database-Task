import express from "express"
import { statusCodes } from "../ExpressJS backend/helpers/userHelper.js"
import postRoutes from "./routes/postRoutes.js"
import { connectDatabase } from "./config/connectdb.js";
import dotenv from 'dotenv';
dotenv.config();
connectDatabase();

const app = express()

app.use(express.json())

app.use((req, res, next) => {
    console.log(req.method, req.path);
    next();
})

app.get("/", (req, res) => res.send("Inventory API is Running"))

app.get("/health", (req,res) => {
    const status = statusCodes.find(item => item.code === 200);
    res.status(status.code).json({ success: true, message: status.message + " Server is running" });
})

app.use("/api/posts", postRoutes);

app.use((req, res) => {
  const status = statusCodes.find(item => item.code === 404);
  res.status(status.code).json({ success: false, message: "URL " + req.originalUrl + " " + status.message });
});

app.listen(3000, () => {
    console.log("Server running at port 3000")
})