const express = require("express");
const app = express();
const cors = require ("cors"); 

app.set('port', process.env.PORT || 3000);

app.use(cors());
app.use(express.json());
app.use(require("./routes/empleados"));
app.use(require("./routes/clientes"));
app.use(require("./routes/security"));
app.use(require("./routes/facturas"));
app.use(require("./routes/productos"));
app.use(require("./routes/productos_facturas"));

app.get('/',(req, res)=>{
    res.status(200).send('index');
})
app.listen(app.get('port'),()=>{
    console.log("listen port 3000");
});