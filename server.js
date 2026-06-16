const express = require('express');
const mysql = require('mysql2');
const app = express();
const connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password: '202508',
    database:'testDB'
});
connection.connect((err)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log("connection has been created");
    const createQuery= `create table students (id INT AUTO_INCREMENT PRIMARY KEY,
    name varchar(20),
    email varchar(20))`
    connection.execute(createQuery,(err)=>{
    if(err){
console.log(err);
connection.end();
return;
    }
    console.log("table is created");
});

});
app.listen(3000,(err)=>{
    if(err){console.log("server fails to run");
    }


    console.log("server is running");
})