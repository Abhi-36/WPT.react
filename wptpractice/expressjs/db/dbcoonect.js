const mysql=require("mysql");
const mysqlcoonection=mysql.createConnection({
"host":"127.0.0.1",
"user":"root",
"pasword":"root123",
"port":3306,
"database":"test"

})
mysqlcoonection.connect(function(err){
if(err)
{
    console.log(" error ocuured"+JSON.stringify(err))
}
else{
    console.log(" coonection is sucessfully done")
}
})
module.eports=mysqlcoonection;