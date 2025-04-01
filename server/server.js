require("dotenv").config();
const express = require('express');
const app = express();
const PORT = 5000;

const authRoute = require('./router/auth-router');
const { connectDB } = require('./utils/db');
const errorMiddleware = require("./middlewares/error-middleware");


app.use(express.json());
app.use("/api/auth", authRoute);
app.use(errorMiddleware);


app.listen(PORT, async()=>{
    await connectDB();
    console.log(`Listening to port ${PORT}`);
})