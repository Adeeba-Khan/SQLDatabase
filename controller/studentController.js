const db = require('../utils/db-connection');
const addEnteries = (req,res)=>{
const {name,email} = req.body;
const insertQuery = 'insert into students (name,email) values (?,?)';
db.execute(insertQuery,[name,email],(err)=>{
    if(err){
        console.log(err.message);
        res.status(500).send(err.message);
        // db.end();
        return;
    }
    console.log("Value has been inserted");
    res.status(200).send(`student with name ${name} is inserted successfully`);
})  


}
const updateEnteries = (req,res)=>{
    
    const {id} = req.params;
    const {name} = req.body;
    const updateQuery= `update students set name = ? where id = ? `;
    db.execute(updateQuery,[name,id],(err,result)=>{
        if(err){
            console.log(err.message);
            res.status(500).send(err.message);
            db.end();
            return;
        }
        if(result.affectedRows === 0){
            err.status(404).send("student not found");
            return;
        }
        console.log("updated");
        res.status(200).send("User has been updated");
    });
}
const deleteEnteries = (req,res)=>{
    const {id}= req.params;
    const deleteQuery = `delete from students where id =?`;
    db.execute(deleteQuery,[id],(err,result)=>{
        if(err){
            console.log(err.message);
            res.status(500).send(err.message);
            db.end();
            return;
        }
        if(result.affectedRows===0){
            res.status(404).send('user not found');
            return;

        }
console.log("deleted");
         res.status(200).send(`User deleted of id ${id}`);

    })
}
module.exports ={addEnteries,updateEnteries,deleteEnteries};

