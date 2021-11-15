import React, { Component } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";

const Record = (props) => (
  <tr>
    <td>{props.record.producto}</td>
    <td>{props.record.cantidad}</td>
    <td>{props.record.precio}</td>
    <td>{props.record.precio_total}</td>
    <td>{props.record.nombre_cliente}</td>
    <td>{props.record.identificacion}</td>
    <td>{props.record.vendedor}</td>
    <td>{props.record.fecha_Venta}</td>
    <td>{props.record.estado}</td>
    <td>
      <Link to={"/edit/" + props.record._id}>Edit</Link> |
      <a
        href="/"
        onClick={() => {
          props.deleteRecord(props.record._id);
        }}
      >
        Delete
      </a>
    </td>
  </tr>
);

export default class TablaVenta extends Component {
//export default function TablaVenta(props) {
  constructor(props) {
    super(props);
    this.deleteRecord = this.deleteRecord.bind(this);
      this.state = {
      producto: "",
      cantidad: "",
      precio: 0,
      precio_total: "",
      nombre_cliente: "",
      identificacion: "",
      vendedor: "",
      fecha: "",
      estado: "",
    records: [],
    };
    
    
    this.onChangeProducto = this.onChangeProducto.bind(this);
    this.onChangeCantidad = this.onChangeCantidad.bind(this);
    this.onChangePrecio = this.onChangePrecio.bind(this);
    this.onChangePrecioTotal = this.onChangePrecioTotal.bind(this);
    this.onChangeNombreCliente = this.onChangeNombreCliente.bind(this);
    this.onChangeIdentificacion = this.onChangeIdentificacion.bind(this);
    this.onChangeVendedor = this.onChangeVendedor.bind(this);
    this.onChangeFecha = this.onChangeFecha.bind(this);
    this.onChangeEstado = this.onChangeEstado.bind(this);
  }
  
  
    // These methods will update the state properties.
  onChangeProducto(e) {
    this.setState({
      producto: e.target.value,
    });
  }
 
  onChangeCantidad(e) {
    this.setState({
      cantidad: e.target.value,
    });
  }
     // These methods will update the state properties.
  onChangePrecio(e) {
    this.setState({
      precio: e.target.value,
    });
  }
 
  onChangePrecioTotal(e) {
    this.setState({
      precio_total: e.target.value,
    });
  }
     // These methods will update the state properties.
  onChangeNombreCliente(e) {
    this.setState({
      nombre_cliente: e.target.value,
    });
  }
 
  onChangeIdentificacion(e) {
    this.setState({
      identificacion: e.target.value,
    });
  }
  
  onChangeVendedor(e) {
    this.setState({
      vendedor: e.target.value,
    });
  }
     // These methods will update the state properties.
  onChangeFecha(e) {
    this.setState({
      fecha: e.target.value,
    });
  }
 
  onChangeEstado(e) {
    this.setState({
      estado: e.target.value,
    });
  }
  
  onSubmit=(e)=> {
    e.preventDefault();
 
    // When post request is sent to the create url, axios will add a new record to the database.
    const newventa = {
      producto: this.state.producto,
      cantidad: this.state.cantidad,
      precio: this.state.precio,
      precio_total: this.state.precio_total,
      nombre_cliente: this.state.nombre_cliente,
      identificacion: this.state.identificacion,
      vendedor: this.state.vendedor,
      fecha: this.state.fecha,
      estado: this.state.estado,
    };
 
    axios
      .post("http://localhost:5000/api/Ventas/", newventa)
      .then((res) => console.log(res.data));
 
    // We will empty the state after posting the data to the database
    this.setState({
      producto: "",
      cantidad: "",
      precio: 0,
      precio_total: 0,
      nombre_cliente: "",
      identificacion: "",
      vendedor: "",
      fecha: "",
      estado: "",
    });
  }
  
  
  // Mostrar Informacion del producto  
    componentDidMount() {
    axios
      .get("http://localhost:5000/api/Ventas/")
      .then((response) => {
        this.setState({ records: response.data });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  // This method will delete a record based on the method
  deleteRecord(id) {
    axios.delete("http://localhost:5000/api/Ventas/" + id).then((response) => {
      console.log(response.data);
    });

    this.setState({
      record: this.state.records.filter((el) => el._id !== id),
    });
  }
  
  recordList(){
    return this.state.records.map((currentrecord) => {
      return (
        <Record
          record={currentrecord}
          deleteRecord={this.deleteRecord}
          key={currentrecord._id}
        />
      );
    });
  }
  
  
  render(){
  const accion = this.props.visual
  if(accion==="registro"){
    return(
  	  <div>
        <form onSubmit={this.onSubmit}>
          <label>Producto <input type="text"
              value={this.state.producto}
              onChange={this.onChangeProducto}/>
          </label>
          <label>Cantidad  <input type="number"
              value={this.state.cantidad}
              onChange={this.onChangeCantidad}/>
          </label>
          <label>Precio  <input type="number" step="0.01"
              value={this.state.precio}
              onChange={this.onChangePrecio}/>
          </label>
          <label>Precio Total   <input type="number" step="0.01"
              value={this.state.precio_total}
              onChange={this.onChangePrecioTotal}/>
          </label>
          <label>Nombre cliente   <input type="text"
              value={this.state.nombre_cliente}
              onChange={this.onChangeNombreCliente}/>
          </label>
          <label>Doc. identificacion   <input type="number"
              value={this.state.identificacion}
              onChange={this.onChangeIdentificacion}/>
          </label>
          <label>Vendedor <input type="text"
              value={this.state.vendedor}
              onChange={this.onChangeVendedor}/>
          </label>
          <label>Fecha   <input type="date"
              value={this.state.fecha}
              onChange={this.onChangeFecha}/>
          </label>
          <div> 
            <label>
            <input type="radio"
                name="priorityOptions"
                value="En-proceso"
                checked={this.state.estado === "En-proceso"}
                onChange={this.onChangeEstado}
            />
            En-proceso</label>
            <label>
            <input type="radio"
                name="priorityOptions"
                value="Cancelado"
                checked={this.state.estado === "Cancelado"}
                onChange={this.onChangeEstado}
            />
            Cancelado</label>
            <label>
            <input type="radio"
                name="priorityOptions"
                value="Entregado"
                checked={this.state.estado === "Entregado"}
                onChange={this.onChangeEstado}
            />
            Entregado</label>
          </div>
          <input
              type="submit"
              value="Registrar"
            />
        </form>
   	  </div>
    )
  }else if(accion==="informacion"){
    return (
      <div>
        <h3>Lista de Ventas</h3>
        <table className="table table-striped" style={{ marginTop: 20 }}>
          <thead>
            <tr>
              <th>Producto</th>
              <th>Cantidad</th>
              <th>Precio</th>
              <th>Total</th>
              <th>Cliente</th>
              <th>Identificacion</th>
              <th>Vendedor</th>
              <th>Fecha</th>
              <th>Estado</th>
            </tr>
          </thead>
            <tbody>{this.recordList()}</tbody>
        </table>
      </div>
    );
  }
}
}
