import dotenv from 'dotenv';
dotenv.config();
import express from "express";
import connectDB from "./config/key.js";
import authRoute from "./routes/authRoutes.js";
import custRoute from "./routes/api/customerRoute.js"
import verifyJwt from "./middlewares/verifyJWT.js"
import cookieParser from "cookie-parser";
import { logger } from "./middlewares/logEvents.js";
import errorHandler from "./middlewares/errorHandler.js"
import { credentials } from "./middlewares/credentials.js";
import cors from "cors"
import { corsOptions } from "./config/corsOptions.js";

const app = express();
connectDB();

//custom middleware
app.use(logger)

//handles opions credentials check/cors!
//fetch cookie credentials
app.use(credentials);

//cross origin resouce sharing
app.use(cors(corsOptions));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//cookies middlewares
app.use(cookieParser())

const PORT = process.env.PORT;

app.get("/", (req, res) => {
    res.json({
        app: "Customer api",
        version: "1.3",
    });
});

app.use("/auth", authRoute);
// verify api Route with jwt token
app.use(verifyJwt);
app.use("/api", custRoute);

//custom Middleware
app.use(errorHandler)

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});