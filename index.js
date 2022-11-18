//configuración inicial para levantar la aplicación en express
if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

//console.log(process.env.NODE_ENV)

const express = require("express"); //ok
const InitDB = require("./DB-data/db");
const app = express();
const port = process.env.PORT || 3000;

const authRouters = require("./routes/auth");
const productsRouters = require("./routes/products");
const ordersRouters = require("./routes/orders");
const usersRouters = require("./routes/users");

app.use(authRouters);
app.use(productsRouters);
app.use(ordersRouters);
app.use(usersRouters);

app.use(express.json()); // middleware con eso ya se puede enviar json desde el body
app.get("/", (req, res) => {
  res.json({ mensaje: "Burger Queen API" });
});

/* app.post('/products', (req, res) => {
    res.status(200).json({'response': 'data recibida',
    "data":req.body
})
})  */

app.listen(port, () => {
  //console.log(`Aplicación activa ${port}`)
  console.log("Aplicación en línea ", port);
});

InitDB();
