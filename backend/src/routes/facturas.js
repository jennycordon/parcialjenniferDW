const express = require("express");
const mySqlCon = require("../db/database");
const security = require ("../security/security");
const jwt = require ('jsonwebtoken');
const router = express.Router();

//get de facturas segun id cliente
router.get('/clientes/:id/facturas',security,(req, res)=>{
    console.log('get facturas segun id del cliente')
    mySqlCon.query("select facturas.id, facturas.cliente_id, facturas.empleado_id, facturas.creado, facturas.estado from facturas join clientes on facturas.cliente_id = clientes.id where clientes.id = ?",[req.params.id],(err,rows,fields)=>{
        if(!err){
            res.status(200).send(rows);
        }else{
            console.log(err.sqlMessage);
            res.status(500).send(err.sqlMessage);
        }
    })
});

//get de facturas segun id empleados
router.get('/empleados/:id/facturas',security,(req, res)=>{
    console.log('Get facturas segun id de empleados')
    mySqlCon.query("select facturas.id, facturas.cliente_id, facturas.empleado_id, facturas.creado, facturas.estado from facturas join empleados on facturas.empleado_id = empleados.id where empleados.id = ?", [req.params.id],(err,rows,fields)=>{
        if(!err){
            res.status(200).send(rows);
        }else{
            console.log(err.sqlMessage);
            res.status(500).send(err.sqlMessage);
        }
    })
});

//get de una consulta general
router.get('/facturas',security,(req, res)=>{
    console.log('get facturas')
    mySqlCon.query("select * from facturas",(err,rows,fields)=>{
        if(!err){
            res.status(200).send(rows);
        }else{
            console.log(err.sqlMessage);
            res.status(500).send(err.sqlMessage);
        }
    })
});

//get con id especifico
router.get('/facturas/:id',security,(req,res)=>{
    console.log('get facturas con id')
    mySqlCon.query("select * from facturas where id = ?",[req.params.id],(err,rows,fields)=>{
        if(!err){
            res.status(200).send(rows);
        }else{
            console.log(err.sqlMessage);
            res.status(500).send(err.sqlMessage);
        }
    })
});

//para insertar
router.post('/facturas',security,(req,res)=>{
    let emp = req.body;
    console.log('insert facturas')
    mySqlCon.query('insert into facturas (cliente_id,empleado_id,creado,estado) values (?,?,NOW(),?)',//no se agrego el id xq es autoincrementable
    [emp.cliente_id,emp.empleado_id,emp.estado], (err,result)=>{
        if(!err){
            res.send('created Succesfully');
        }else{
            console.log(err);
        }
    })
});

//para actualizar con id
router.put('/facturas/:id', security, (req,res)=>{
    let fac = req.body;
    console.log('PUT facturas con id')
    mySqlCon.query('update facturas set cliente_id=?, creado=?, empleado_id=?, estado=? where id = ?',
    [fac.cliente_id,fac.creado,fac.empleado_id,fac.estado,req.params.id],(err,result)=>{
        if(!err){
            res.send('updated successfully');            
        }else{
            console.log(err.sqlMessage);
            res.status(500).send(err.sqlMessage);
        }
    })
});

//patch y delete
router.patch('/facturas/:id', security, (req,res)=>{
    let fac = req.body;
    console.log('Patch y delete de facturas')
    mySqlCon.query('update facturas set estado= ? where id = ?',
    [fac.estado,req.params.id],(err,result)=>{
        if(!err){
            res.send('updated successfully');            
        }else{
            console.log(err.sqlMessage);
            res.status(500).send(err.sqlMessage);
        }
    })
});

//patch con id
router.delete('/facturas/:id', security, (req,res)=>{
    let fac = req.body;
    console.log('Patch facturas')
    mySqlCon.query('update facturas set estado= ANULADA where id = ?',
    [fac.estado,req.params.id],(err,result)=>{
        if(!err){
            res.send('updated successfully');            
        }else{
            console.log(err.sqlMessage);
            res.status(500).send(err.sqlMessage);
        }
    })
});

module.exports = router;