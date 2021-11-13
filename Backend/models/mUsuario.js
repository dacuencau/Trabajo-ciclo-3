const mongoose = require("mongoose");
var uniqueValidator = require("mongoose-unique-validator");

const usuario = mongoose.Schema({
  documento: { type: Number, required: true, unique: true },
  nombreApellido: { type: String, required: true },
  telefono: { type: Number },
  correo: { type: String, required: true },
  sucursal: { type: String, required: true },
  rol: { type: String, required: true },
});

usuario.plugin(uniqueValidator);

module.exports = mongoose.model("Usuario", usuario);
