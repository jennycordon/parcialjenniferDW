const db = require("mysql");

const myCon = db.createConnection({
    host:"db4free.net",
    user: "desaweb2020",
    password:"desaweb2020",
    database: "umg4desaweb"
});

myCon.connect((err)=>{
    if(!err){
        console.log("connection ok");
    }else{
        console.log("connection error: "+JSON.stringify(err.undefined,2));
    }
});

module.exports=myCon;

