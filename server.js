const express = require('express');
const mysql = require('mysql2');
// const db = require('./utils/db-connection');
const router = require('./routes/studentRoutes');
const app = express();
app.use(express.json());

app.use('/students',router);
app.listen(3000,(err)=>{
    if(err){console.log("server fails to run");
    }


    console.log("server is running");
})