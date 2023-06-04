const express=require("express");
const router=express.Router();
const mysql=require("../db/dbconnect");

router.get("/employee",function(req,respnse)
{
    connection.query( "select * from employee",function(err,data){
    if(err)
    {
         response.status(500),send("dada not found"+JSON.stringify(err,data))
    }
    else{
        console.log(req.params.id)
        response.send(data);
    }
})
})
router.get("/employee/:empid",function(req,resp)
{
     connection.query(" select * from employee where id",function(err,data)
     {
        if(err)
        {
            response.status(500),send("dada not found"+JSON.stringify(err))
        }
        else{
            resp.send(data[0]);
        }

     })

})
router.post("/employee/:eid",function(ewq,resp)
{
    connection.query("insert into employee values(? ? ?)")
})