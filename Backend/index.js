var express = require("express");
var mongoose = require("mongoose");
const cors = require("cors");
var app = express();
require("dotenv").config();
const { ATLAS_URI } = require('./database/config');

const productsRoutes = require("./routes/Productos");
const ventasRoutes = require("./routes/Ventas");
const usuariosRoutes = require("./routes/Usuarios");

app.use(express.json()); //
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(express.static('public'));

ATLAS_URI();

mongoose.connect(process.env.ATLAS_URI).then(() => {
  console.log("Conectado");
});

app.use("/api/Productos", productsRoutes);
app.use("/api/Ventas", ventasRoutes);
app.use("/api/Usuarios", usuariosRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Servidor corriendo en el puerto ${ process.env.PORT }`)})


module.exports = app;
