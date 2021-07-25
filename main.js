const express=require("express");
const app=express();
const members=require('./routes/members');

app.use('/members',members);

app.listen(3306,()=>{
    console.log("running");
});
