const express = require("express");
const router = express.Router();
const jwt = require ('jsonwebtoken');
const mySqlCon = require("../db/database");

router.post("/login",(req,res)=>{
    const body = req.body;
    console.log(body.userName);
    let user;
    mySqlCon.query("select * from usuarios where nombre = ?",body.userName,(err,rows,field)=>{
        if(!err){
            user=rows[0];
            if(user === undefined){
                return res.status(401).send('user does not exist');    
            }
            if(body.password === user.password){
                const token = jwt.sign({_id: user.id},'secret',{ expiresIn: '1m'});
                return res.status(200).json({token});
            }else{
                return res.status(401).send('login invalid');
            }
        }else{
            return res.status(500).send(err);
        }
    });
});

module.exports = router;