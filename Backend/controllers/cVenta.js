const Ventas = require("../models/mVenta");

exports.getVentas = (req, res) => {
  Ventas.find().then((postResult) => {
    res.status(200).json(postResult);
  });
};

exports.addVentas = (req, res) => {
  const ventasAdd = new Ventas({
    producto: req.body.producto,
    cantidad: req.body.cantidad,
    precio: req.body.precio,
    precio_total: req.body.precio_total,
    nombre_cliente: req.body.nombre_cliente,
    identificacion: req.body.identificacion,
    vendedor: req.body.vendedor,
    fecha: req.body.fecha,
    estado: req.body.estado,
  });

  ventasAdd.save().then((createdVenta) => {
    console.log(createdVenta);
    res.status(201).json("Venta registrada");
  });
};

exports.getVentaId = (req, res) => {
  Ventas.findById(req.params.id).then((ventaResult) => {
    if (ventaResult) {
      res.status(200).json(ventaResult);
    } else {
      res.status(404).json("Venta no encontrada");
    }
  });
};

exports.deleteVentas = (req, res) => {
  Ventas.findById(req.params.id).then((productoResult) => {
    if (productoResult) {
      Ventas.findByIdAndDelete(
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

exports.updateVentasById = (req, res) => {
  Ventas.findById(req.params.id).then((productoResult) => {
    if (productoResult) {
      Ventas.findByIdAndUpdate(
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


