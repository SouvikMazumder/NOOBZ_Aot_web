const express = require('express');
//const bodyParser = require('body-parser');
//import { dirname } from "path";
//import { fileURLToPath } from "url";

const connectDB  = require('./config/db');


//const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port=3000;
connectDB();

app.use(express.json({extened : false}));

app.get('/',(req,res) =>{
    res.send('App');
});

app.use('/api/users',require('./routes/api/users'));

app.listen(port,() =>{
    console.log("Server is running");
});

