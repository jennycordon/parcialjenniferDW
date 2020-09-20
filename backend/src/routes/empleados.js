const express = require("express");
const mySqlCon = require("../db/database");
const security = require ("../security/security");
const jwt = require ('jsonwebtoken');
const { Router } = require("express");
const { route } = require("./clientes");
const router = express.Router();

//consulta de todos los registros
router.get('/empleados',security,(req, res)=>{
    console.log('get empleados')
    mySqlCon.query("select * from empleados",(err,rows,fields)=>{
        if(!err){
            res.status(200).send(rows);
        }else{
            console.log(err.sqlMessage);
            res.status(500).send(err.sqlMessage);
        }
    })
});

//consulta del registro con id
router.get('/empleados/:id',security,(req,res)=>{
    console.log('get empleados con id')
    mySqlCon.query("select * from empleados where id = ?",[req.params.id],(err,rows,fields)=>{
        if(!err){
            res.status(200).send(rows);
        }else{
            console.log(err.sqlMessage);
            res.status(500).send(err.sqlMessage);
        }
    })
});

 //para eliminar
 router.delete('/empleados/:id',security,(req,res)=>{
    console.log('delete empleados')
    mySqlCon.query('delete from empleados where id = ?',
    [req.params.id], (err,result)=>{
        if(!err){
            res.send('deleted Succesfully');
        }else{
            console.log(err);
        }
    })
});

//para insertar
router.post('/empleados',security,(req,res)=>{
    let emp = req.body;
    console.log('insert empleados')
    mySqlCon.query('insert into empleados (codigo, creado_por, nombre, salario) values (?,?,?,?)',//no se agrego el id xq es autoincrementable
    [emp.codigo,emp.creado_por,emp.nombre,emp.salario], (err,result)=>{
        if(!err){
            res.send('created Succesfully');
        }else{
            console.log(err);
        }
    })
});

//para actualizar
router.put('/empleados',security,(req,res)=>{
    let emp = req.body;
    console.log('update empleados')
    mySqlCon.query('update empleados set codigo=?, creado_por=?, nombre=?, salario=? where id = ?',
    [emp.codigo,emp.creado_por,emp.nombre,emp.salario,emp.id],(err,result)=>{
        if(!err){
            res.send('updated Succesfully');
        }else{
            console.log(err);
        }
    })
});

//para actualizar con id
router.put('/empleados/:id',security,(req,res)=>{
    let emp = req.body;
    console.log('update empleados con id')
    mySqlCon.query('update empleados set codigo=?, creado_por=?, nombre=?, salario=? where id = ?',
    [emp.codigo,emp.creado_por,emp.nombre,emp.salario,emp.id],(err,result)=>{
        if(!err){
            res.send('updated Succesfully');
        }else{
            console.log(err);
        }
    })
});

module.exports = router;