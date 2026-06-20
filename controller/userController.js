const db =require('../utils/db-connection');
const addEnteries =(req,res)=> {
const {name,email}=req.body;
const insertQuery = `insert into users (name,email) value (?,?)`;
db.execute(insertQuery,[name,email],(err)=>{
    if(err){
        console.log(err.message);
        res.status(500).send(err.message);
        return;
    }
    console.log("values inserted");
    res.status(200).send(`name ${name} information is inserted`);


})
}
const getEnteries = (req,res)=>{
    const getQuery= `select * from users`;
db.execute(getQuery,(err,result)=>{
    if(err){
         console.log(err.message);
        res.status(500).send(err.message);
        return;
    }
    console.log("values are obtained");
    res.status(200).json(result);
    
})}
module.exports={
    addEnteries,getEnteries

}