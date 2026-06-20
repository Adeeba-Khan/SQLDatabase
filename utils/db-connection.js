const mysql2 = require('mysql2');
const connection = mysql2.createConnection({
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
const createQuery= `create table IF NOT EXISTS students (id INT AUTO_INCREMENT PRIMARY KEY,
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

// table 1
const createQuery1= `CREATE TABLE IF NOT EXISTS Users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE)`
    connection.execute(createQuery1,(err)=>{
    if(err){
console.log(err);
connection.end();
return;
    }
    console.log("table 1 is created");
});

// table 2

const createQuery2= `CREATE TABLE IF NOT EXISTS Buses (
    id INT AUTO_INCREMENT PRIMARY KEY,
    busNumber VARCHAR(50) NOT NULL,
    totalSeats INT NOT NULL,
    availableSeats INT NOT NULL)`
    connection.execute(createQuery2,(err)=>{
    if(err){
console.log(err);
connection.end();
return;
    }
    console.log("table 2 is created");
});
/*// table 3
const createQuery3= `CREATE TABLE Bookings (
    id INT AUTO_INCREMENT PRIMARY KEY,
    seatNumber INT NOT NULL
)`
    connection.execute(createQuery3,(err)=>{
    if(err){
console.log(err);
connection.end();
return;
    }
    console.log("table 3 is created");
});
// table 4
const createQuery4= `CREATE TABLE Payments (
    id INT AUTO_INCREMENT PRIMARY KEY,
    amountPaid DECIMAL(10,2) NOT NULL,
    paymentStatus VARCHAR(50) NOT NULL
)`
    connection.execute(createQuery4,(err)=>{
    if(err){
console.log(err);
connection.end();
return;
    }
    console.log("table 4 is created");
});
*/


});
module.exports =connection;