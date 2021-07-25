const express=require("express");
const mysql=require("mysql");
const con=mysql.createConnection();
const bodyParser=require("body-parser");

const server=express();

server.use(bodyParser.json());

//Insert
server.post("/members",(req,res)=>{
    var sql='INSERT INTO members VALUES(?,?,?,?)';
    var params=[req.body.m_id,req.body.m_pw,req.body.m_name,req.body.m_email];

    con.query(sql,params,(error,rows)=>{
        if(error){
            throw error;
        }
        console.log('Member is: ', rows);
        res.send(rows);
    });
});

//Select
server.get("/members",(req,res)=>{
    con.query('SELECT * FROM members',(error,rows)=>{
        if(error){
            throw error;
        }
        console.log('Member is: ', rows);
        res.send(rows);
    });
});
server.get("/members/:m_id",(req,res)=>{
    con.query('SELECT * FROM members WHERE m_id=\''+req.params.m_id+'\'',(error,rows)=>{
        if(error){
            throw error;
        }
        console.log('Member is: ', rows);
        res.send(rows);
    });
});

//Update
server.put("/members/:m_id",(req,res)=>{
    var sql = 'UPDATE members SET m_pw='+req.body.m_pw+', m_name='+req.body.m_name+', m_email='+req.body.m_email+' WHERE m_id=\''+req.params.m_id+"\'";
    connection.query(sql, (error, rows)=>{
        if(error) {
            throw error;
        }
        console.log('members info is: ', rows);
        res.send(rows);
    });
});

//Delete
server.delete("/members/:m_id",(req,res)=>{
    var sql='DELETE FROM members WHERE m_id=\''+req.params.m_id+'\'';
    connection.query(sql, (error, rows)=>{
        if(error) {
            throw error;
        }
        console.log('members info is: ', rows);
        res.send(rows);
    });
});

server.listen(3306,()=>{
    console.log("running");
});