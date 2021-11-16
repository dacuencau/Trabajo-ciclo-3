import React, { Component } from "react";
// This will require to npm install axios
import axios from 'axios';
import { withRouter } from "react-router";
 
class Edit extends Component {
  // This is the constructor that stores the data.
  constructor(props) {
    super(props);
    
    this.onChangeProducto = this.onChangeProducto.bind(this);
    this.onChangeCantidad = this.onChangeCantidad.bind(this);
    this.onChangePrecio = this.onChangePrecio.bind(this);
    this.onChangePrecioTotal = this.onChangePrecioTotal.bind(this);
    this.onChangeNombreCliente = this.onChangeNombreCliente.bind(this);
    this.onChangeIdentificacion = this.onChangeIdentificacion.bind(this);
    this.onChangeVendedor = this.onChangeVendedor.bind(this);
    this.onChangeFecha = this.onChangeFecha.bind(this);
    this.onChangeEstado = this.onChangeEstado.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
 
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
  }
  // This will get the record based on the id from the database.
  componentDidMount() {
    axios
      .get("http://localhost:5000/api/Ventas/" + this.props.match.params.id)
      .then((response) => {
        this.setState({
          producto: response.data.producto,
          cantidad: response.data.cantidad,
          precio: response.data.precio,
          precio_total: response.data.precio_total,
          nombre_cliente: response.data.nombre_cliente,
          identificacion: response.data.identificacion,
          vendedor: response.data.vendedor,
          fecha: response.data.fecha,
          estado: response.data.estado,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
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
 
  // This function will handle the submission.
  onSubmit(e) {
    e.preventDefault();
    const newEditVenta = {
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
    console.log(newEditVenta);
 
    // This will send a post request to update the data in the database.
    axios
      .post(
        "http://localhost:5000/api/Ventas/" + this.props.match.params.id,
        newEditVenta
      )
      .then((res) => console.log(res.data));
 
    this.props.history.push("/");
  }
 
  // This following section will display the update-form that takes the input from the user to update the data.
  render() {
    return (
      <div>
        <h3 align="center">Update Record</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Person's Name: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.person_name}
              onChange={this.onChangePersonName}
            />
          </div>
          <div className="form-group">
            <label>Position: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.person_position}
              onChange={this.onChangePersonPosition}
            />
          </div>
          <div className="form-group">
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="priorityOptions"
                id="priorityLow"
                value="Intern"
                checked={this.state.person_level === "Intern"}
                onChange={this.onChangePersonLevel}
              />
              <label className="form-check-label">Intern</label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="priorityOptions"
                id="priorityMedium"
                value="Junior"
                checked={this.state.person_level === "Junior"}
                onChange={this.onChangePersonLevel}
              />
              <label className="form-check-label">Junior</label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="priorityOptions"
                id="priorityHigh"
                value="Senior"
                checked={this.state.person_level === "Senior"}
                onChange={this.onChangePersonLevel}
              />
              <label className="form-check-label">Senior</label>
            </div>
          </div>
          <br />
 
          <div className="form-group">
            <input
              type="submit"
              value="Update Record"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    );
  }
}
 
// You can get access to the history object's properties and the closest <Route>'s match via the withRouter
// higher-order component. This makes it easier for us to edit our records.
 
export default withRouter(Edit);
