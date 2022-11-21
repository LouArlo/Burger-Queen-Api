//configuración inicial para levantar la aplicación en express en mode desarrollo o producción
if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}
//console.log(process.env.NODE_ENV)

const express = require("express"); 
const InitDB = require("./DB-data/db");
const bodyParser = require('body-parser')
const app = express();
const port = process.env.PORT || 3000;

const authRouters = require("./routes/auth");
const productsRouters = require("./routes/products");
const ordersRouters = require("./routes/orders");
const usersRouters = require("./routes/users");
//const uploadRouters  = require("./controllers/upload");



//for parsing json
app.use(
    bodyParser.json({
        limit: '20mb'
    })
);

//for parsing application / x-www-form-urlencoded
app.use(
    bodyParser.urlencoded({
        limit: '20mb',
        extended: true
    })
);
// middleware
app.use(express.json());

app.use(authRouters);
app.use(productsRouters);
app.use(ordersRouters);
app.use(usersRouters);
//app.use(uploadRouters);


app.get('/', (req, res) => {
    res.send('Bienvenidos a la API')
});
/* app.use(express.json()); // middleware con eso ya se puede enviar json desde el body
app.get("/", (req, res) => {
  res.json({ mensaje: "Burger Queen API" });
}); */
// ok si recibe datos
   /* app.post('/users', (req, res) => {
    res.status(200).json({'response': 'data recibida',
    "data":req.body
})
})   */
/* app.post('/users', (req, res) => {
    const data = req.body
    model.crete(data, (err, docs) => {
        res.send({ data: docs })
   })
})   */

app.listen(port, () => {
    console.log("Aplicación en línea ", port);
});

InitDB();
