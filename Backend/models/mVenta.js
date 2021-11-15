const mongoose = require("mongoose");
var uniqueValidator = require("mongoose-unique-validator");

const venta = mongoose.Schema({
  producto: { type: String, required: true, unique: true },
  cantidad: { type: Number, required: true },
  precio: { type: Number, required: true },
  precio_total: { type: Number, required: true },
  nombre_cliente: { type: String },
  identificacion: { type: Number, required: true },
  vendedor: { type: String, required: true },
  fecha: { type: String, required: true },
  estado: { type: String, required: true },
});

venta.plugin(uniqueValidator);

module.exports = mongoose.model("Venta", venta);
