const express = require("express");
const mySqlCon = require("../db/database");
const security = require ("../security/security");
const jwt = require ('jsonwebtoken');
const router = express.Router();

router.get('/productos',security,(req, res)=>{
    console.log('get productos')
    mySqlCon.query("select * from productos",(err,rows,fields)=>{
        if(!err){
            res.status(200).send(rows);
        }else{
            console.log(err.sqlMessage);
            res.status(500).send(err.sqlMessage);
        }
    })
});

router.get('/productos/:id',security,(req,res)=>{
    console.log('get productos con id')
    mySqlCon.query("select * from productos where id = ?",[req.params.id],(err,rows,fields)=>{
        if(!err){
            res.status(200).send(rows);
        }else{
            console.log(err.sqlMessage);
            res.status(500).send(err.sqlMessage);
        }
    })
});

//para eliminar
router.delete('/productos/:id',security,(req,res)=>{
    console.log('delete productos')
    mySqlCon.query('delete from productos where id = ?',
    [req.params.id], (err,result)=>{
        if(!err){
            res.send('deleted Succesfully');
        }else{
            console.log(err);
        }
    })
});

//para insertar
router.post('/productos',security,(req,res)=>{
    let emp = req.body;
    console.log('insert productos')
    mySqlCon.query('insert into productos (creado_por, nombre, precio) values (?,?,?)',//no se agrego el id xq es autoincrementable
    [emp.creado_por,emp.nombre,emp.precio], (err,result)=>{
        if(!err){
            res.send('created Succesfully');
        }else{
            console.log(err);
        }
    })
});

//para actualizar
router.put('/productos',security,(req,res)=>{
    let emp = req.body;
    console.log('update productos')
    mySqlCon.query('update productos set creado_por=?, nombre=?, precio=? where id = ?',
    [emp.creado_por,emp.nombre,emp.precio,emp.id],(err,result)=>{
        if(!err){
            res.send('updated Succesfully');
        }else{
            console.log(err);
        }
    })
});

module.exports = router;