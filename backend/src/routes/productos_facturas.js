const express = require("express");
const mySqlCon = require("../db/database");
const security = require ("../security/security");
const jwt = require ('jsonwebtoken');
const router = express.Router();

//get con join
router.get('/facturas/:id/productos',security,(req,res)=>{
    console.log('get Productos_facturas con id de factura')
    mySqlCon.query("select  productos_facturas.id, productos_facturas.producto_id, productos_facturas.cantidad, productos_facturas.subtotal, productos_facturas.creado_por from facturas join productos_facturas on facturas.id = productos_facturas.factura_id join productos on productos_facturas.producto_id = productos.id where facturas.id = ?",[req.params.id],(err,rows,fields)=>{
        if(!err){
            res.status(200).send(rows);
        }else{
            console.log(err.sqlMessage);
            res.status(500).send(err.sqlMessage);
        }
    })
});

//Get general
router.get('/productos_facturas',security,(req, res)=>{
    console.log('get productos_facturas')
    mySqlCon.query("select * from productos_facturas",(err,rows,fields)=>{
        if(!err){
            res.status(200).send(rows);
        }else{
            console.log(err.sqlMessage);
            res.status(500).send(err.sqlMessage);
        }
    })
});

//Get con id
router.get('/productos_facturas/:id',security,(req,res)=>{
    console.log('get productos_facturas con id')
    mySqlCon.query("select * from productos_facturas where id = ?",[req.params.id],(err,rows,fields)=>{
        if(!err){
            res.status(200).send(rows);
        }else{
            console.log(err.sqlMessage);
            res.status(500).send(err.sqlMessage);
        }
    })
});

//para eliminar
router.delete('/productos_facturas/:id',security,(req,res)=>{
    console.log('delete productos_facturas')
    mySqlCon.query('delete from productos_facturas where id = ?',
    [req.params.id], (err,result)=>{
        if(!err){
            res.send('deleted Succesfully');
        }else{
            console.log(err);
        }
    })
});

//para insertar
router.post('/productos_facturas',security,(req,res)=>{
    let emp = req.body;
    console.log('insert productos_facturas')
    mySqlCon.query('insert into productos_facturas (cantidad,creado_por,factura_id,producto_id,subtotal) values (?,?,?,?,?)',//no se agrego el id xq es autoincrementable
    [emp.cantidad,emp.creado_por,emp.factura_id,emp.producto_id,emp.subtotal], (err,result)=>{
        if(!err){
            res.send('created Succesfully');
        }else{
            console.log(err);
        }
    })
});

//para actualizar
router.put('/productos_facturas',security,(req,res)=>{
    let emp = req.body;
    console.log('update productos_facturas')
    mySqlCon.query('update productos_facturas set producto_id=?, factura_id=?, cantidad=?, subtotal=?, creado_por=? where id = ?',
    [emp.producto_id,emp.factura_id,emp.cantidad,emp.subtotal,emp.creado_por,emp.id],(err,result)=>{
        if(!err){
            res.send('updated Succesfully');
        }else{
            console.log(err);
        }
    })
});

//para actualizar con id
router.put('/productos_facturas/:id',security,(req,res)=>{
    let emp = req.body;
    console.log('update productos_facturas con id')
    mySqlCon.query('update productos_facturas set producto_id=?, factura_id=?, cantidad=?, subtotal=?, creado_por=? where id = ?',
    [emp.producto_id,emp.factura_id,emp.cantidad,emp.subtotal,emp.creado_por,emp.id],(err,result)=>{
        if(!err){
            res.send('updated Succesfully');
        }else{
            console.log(err);
        }
    })
});

module.exports = router;