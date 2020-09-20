const express = require("express");
const mySqlCon = require("../db/database");
const security = require ("../security/security");
const router = express.Router();

router.get('/clientes',security,(req, res)=>{
    console.log('get clientes')
    mySqlCon.query("select * from clientes",(err,rows,fields)=>{
        if(!err){
            res.status(200).send(rows);
        }else{
            console.log(err.sqlMessage);
            res.status(500).send(err.sqlMessage);
        }
    })
});

router.get('/clientes/:id',security,(req,res)=>{
    console.log('get clientes con id')
    mySqlCon.query("select * from clientes where id = ?",[req.params.id],(err,rows,fields)=>{
        if(!err){
            res.status(200).send(rows);
        }else{
            console.log(err.sqlMessage);
            res.status(500).send(err.sqlMessage);
        }
    })
});

 //para eliminar
 router.delete('/clientes/:id',security,(req,res)=>{
    console.log('delete clientes')
    mySqlCon.query('delete from clientes where id = ?',
    [req.params.id], (err,result)=>{
        if(!err){
            res.send('deleted Succesfully');
        }else{
            console.log(err);
        }
    })
});

//para insertar
router.post('/clientes',security,(req,res)=>{
    let cli = req.body;
    console.log('insert clientes')
    mySqlCon.query('insert into clientes (creado_por, direccion, nit, nombre) values (?,?,?,?)',//no se agrego el id xq es autoincrementable
    [cli.creado_por,cli.direccion,cli.nit,cli.nombre], (err,result)=>{
        if(!err){
            res.send('created Succesfully');
        }else{
            console.log(err);
        }
    })
});

//para actualizar
router.put('/clientes',security,(req,res)=>{
    let cli = req.body;
    console.log('update clientes')
    mySqlCon.query('update clientes set creado_por=?, direccion=?, nit=?, nombre=? where id = ?',
    [cli.creado_por,cli.direccion,cli.nit,cli.nombre,req.params.id],(err,result)=>{
        if(!err){
            res.send('updated Succesfully');
        }else{
            console.log(err);
        }
    })
});

//para actualizar con id
router.put('/clientes/:id',security,(req,res)=>{
    let emp = req.body;
    console.log('update clientes con ID')
    mySqlCon.query('update clientes set creado_por=?, direccion=?, nit=?, nombre=? where id = ?',
    [emp.creado_por,emp.direccion,emp.nit,emp.nombre,emp.id],(err,result)=>{
        if(!err){
            res.send('updated Succesfully');
        }else{
            console.log(err);
        }
    })
});

module.exports = router;