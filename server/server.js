require("dotenv").config();
const express = require('express');
const app = express();
const PORT = 5000;

const authRoute = require('./router/auth-router');
const contactRoute = require("./router/contact-router");
const serviceRoute = require("./router/service-router");
const adminRoute = require("./router/admin-router")
const { connectDB } = require('./utils/db');
const errorMiddleware = require("./middlewares/error-middleware");
const cors = require("cors");


const corsOptions = {
    // origin: "http://localhost:5173",
    origin: "https://mern-practice-nu.vercel.app",
    methods:"GET,POST,PUT,DELETE,PATCH,HEAD",
    credentials:true,
}
app.use(cors(corsOptions));


app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/form", contactRoute);
app.use("/api/data", serviceRoute);
app.use(errorMiddleware);

// let's define admin routes
app.use("/api/admin", adminRoute);


app.listen(PORT, async()=>{
    await connectDB();
    console.log(`Listening to port ${PORT}`);
})