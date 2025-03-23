const express = require('express');
const app = express();
const PORT = 5000;

const authRoute = require('./router/auth-router');

app.use(express.json());
app.use("/api/auth", authRoute);


app.listen(PORT, ()=>{
    console.log(`Listening to port ${PORT}`);
})