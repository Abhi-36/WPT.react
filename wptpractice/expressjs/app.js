// import libraries
const express=require("express");
const app=express() ;
const bodyparse=require("body-parse");
const router=require("./router/router.js");
// middle ware
app.use(bodyparse,urlencoded({extended:false}))
app.use(bodyparser.JSON())
// configuration the application


//add url handle
app.use("/",router)


//start the server
app.lsiten(3002,function()
{
    console.log(" server 3003 will be started");
})
module.exports=app;