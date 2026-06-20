const db = require('../utils/db-connection');
const addEnteries =(req,res)=> {
const {busNumber, totalSeats,availableSeats}= req.body;
const insertQuery = `insert into buses (busNumber,totalSeats,availableseats) value (?,?,?)`;
db.execute(insertQuery,[busNumber,totalSeats,availableSeats],(err)=>{
    if(err){
        console.log(err.message);
        res.status(500).send(err.message);
        return;
    }
    console.log("values inserted");
    res.status(200).send(`busNumber ${busNumber} information is inserted`);


})

    
}
const getEnteries = (req,res)=>{
    const {seats}= req.params;
    console.log(seats);
const getQuery= `select * from buses where totalSeats > ?`;
db.execute(getQuery,[seats],(err,result)=>{
    if(err){
         console.log(err.message);
        res.status(500).send(err.message);
        return;
    }
    console.log("values are obtained");
    res.status(200).json(result);
    
})

}
module.exports={addEnteries,getEnteries};
