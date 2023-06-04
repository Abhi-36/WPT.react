const express=require("express");
const router=express.Router();
const connection=require("../db/dbconnect");

router.get("/products",(req,resp)=>

{
      connection.query("select * from products",(err,data)=>
      {
        if(err)
        {
            resp.status(500).send("data is not present "+JSON.stringify(err));
        }
        else
        {
                 // console.log(req.params.pid);
                  resp.send(data);
        }
    })
})

router.get("/products/:pid",(req,resp)=>
{
    connection.query(" select * from products where pid=?",[req.params.pid],(err,data)=>
    {
        if(err)
        {
            resp.status(500).send("data is not found"+JSON.stringify(err));
        }
        else{
            resp.send(data[0]);
        }
    })
})
router.post("/insertemployee",(req,resp)=>

{
    var pid=req.body.pid;
    var pname=req.body.pname;
    var prize=req.body.prize;
    connection.query("insert into products values(? ? ?)",[pid,pname,prize],(err,result)=>
    {
         if(err)
         {
            resp.status(500).send("error ocured"+JSON.stringify(err))
         }
         else
         {
            if(reult.affectedrows>0)
            {
                resp.send("{'Sdata :sucessfully inserted'}")
            }
            else{
                resp.send(" {'data : is dont inserted sucessfully'}")
            }
         }
    })

})
router.put("/update",(req,resp)=>
{
    var pid=req.body.pid;
    var pname=req.body.pname;
    var prize=req.body.prize;
    connection.query("update products set pname=? ,prize=? where pid=?",(err,result)=>
    {
        if(err)
        {
            resp.send("erroe ocuured"+JSON.stringify(err))
        }
        else{
            if(result.affectedrows>0)
            {
            resp.status(500).send("{ ' products :table updated sucessfully'}")
            }
            else{
                resp.send("{'products:table not updated'}")
            }
        }
    })
})
router.delete("/delete",(req,resp)=>
{
   connection.query("delete from products where pid=? ",[req.params.pid],(err,result)=>{
    if(err)
    {
        resp.status(500).send("error occured"+JSON.stringify(err))
    }
    else{
        if(result.affectedrows>0)
        {
            resp.send("{' products:product delted sucessfully'}")
        }
        else
        {
            esp.send("{' products:product  not delted sucessfully'}")
        }
    }
    
    
   })   
})
module.exports=router;