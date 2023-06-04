// import libaries
const express=require("express");
const app=express();
const bodyparser=require("body-parser");
const router=require("./router/routers");

// middle ware
app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json());
// 
app.use("/",router);

// sever start
app.listen(3002,()=>
{
    console.log(" 3002 server will be started")
})