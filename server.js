const express = require('express');
const mysql = require('mysql2');
// const db = require('./utils/db-connection');
const router = require('./routes/studentRoutes');
const router1 = require('./routes/userRoutes');
const router2 = require('./routes/busRoutes');
const app = express();
app.use(express.json());

app.use('/students',router);
app.use('/user',router1);
app.use('/bus',router2);
app.listen(3000,(err)=>{
    if(err){console.log("server fails to run");
    }


    console.log("server is running");
})