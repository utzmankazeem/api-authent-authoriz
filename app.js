import express from "express";
import dotenv from 'dotenv';
import connectDB from "./config/key.js";
import authRoute from "./routes/authRoutes.js";
import custRoute from "./routes/api/customerRoute.js"

const app = express();

dotenv.config();
connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT;
console.log(PORT);

app.get("/", (req, res) => {
    res.json({
        app: "Customer api",
        version: "1.3",
    });
});

app.use("/auth", authRoute);
app.use("/api", custRoute);

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});