const express = require('express');
const connectDb = require('./config/db');


const app = express();
connectDb();

const port = process.env.PORT || 4000;

app.listen(port,() => console.log(`Server started on Port ${port}`))