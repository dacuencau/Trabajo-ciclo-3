const Usuarios = require("../models/mUsuario");

exports.getUsuarios = (req, res) => {
  Usuarios.find().then((usuarioResult) => {
    res.status(200).json(usuarioResult);
  });
};

exports.addUsuario = (req, res) => {
  const usuarioadd = new Usuarios({
    documento: req.body.Documento,
    nombreApellido: req.body.NombreApellido,
    telefono: req.body.Telefono,
    correo: req.body.Correo,
    sucursal: req.body.Sucursal,
    rol: req.body.Rol,
  });

  usuarioadd.save().then((createdUser) => {
    console.log(createdUser);
    res.status(201).json("Created satisfied");
  });
};

exports.getUsuatioId = (req, res) => {
  Usuarios.findById(req.params.id).then((usuarioResult) => {
    if (usuarioResult) {
      res.status(200).json(usuarioResult);
    } else {
      res.status(404).json("No Encontrado");
    }
  });
};

exports.deleteUsuario = (req, res) => {
  Usuarios.findById(req.params.id).then((productoResult) => {
    if (productoResult) {
      Usuarios.findByIdAndDelete(
        { _id: req.params.id },
        req.body,
        function (err) {
          res.status(200).json("Deleted");
        }
      );
    } else {
      res.status(404).json("No Encontrado");
    }
  });
};

exports.updateUsuarioById = (req, res) => {
  Usuarios.findById(req.params.id).then((productoResult) => {
    if (productoResult) {
      Usuarios.findByIdAndUpdate(
        { _id: req.params.id },
        req.body,
        function (err) {
          res.status(200).json("Update");
        }
      );
    } else {
      res.status(404).json("No Update");
    }
  });
};
