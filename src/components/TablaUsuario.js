import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import '../css/tablas.css';


const Record = (props) => (
  <tr>
    <td>{props.record.documento}</td>
    <td>{props.record.nombreApellido}</td>
    <td>{props.record.telefono}</td>
    <td>{props.record.correo}</td>
    <td>{props.record.sucursal}</td>
    <td>{props.record.rol}</td>
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

export default class TablaUsuario extends Component {
//export default function TablaUsuario(props) {
  constructor(props){
    super(props);
    this.deleteRecord = this.deleteRecord.bind(this);
    this.state = {
    records: [],
    };
  }
  
  
  // Mostrar Informacion del usuario  
    componentDidMount() {
    axios
      .get("http://localhost:5000/api/Usuarios/")
      .then((response) => {
        this.setState({ records: response.data });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  // This method will delete a record based on the method
  deleteRecord(id) {
    axios.delete("http://localhost:5000/api/Usuarios/" + id).then((response) => {
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
  /*
  if(accion==="registro"){
    return(
  	  <div>
        <form>
          <label>Nombre <input type="text"/></label>
          <label>Apellido <input type="text"/></label>
          <label>Doc. identificacion   <input type="number"/></label>
          <label>Estado
            <select name="select">
              <option value="estado1" selected>Pendiente</option>
              <option value="estado2">Autorizado</option>
              <option value="estado3">No-autorizado</option>
            </select>
          </label>
          <label>Rol 
            <select name="select">
              <option value="rol1" selected>Usuario</option>
              <option value="rol2">Vendedor</option>
              <option value="rol3">Administrador</option>
            </select>
          </label>
          <button>Enviar Datos</button>
        </form>
   	  </div>
    )
  }else 
  */
  
  
  render(){
  const accion = this.props.visual
  if(accion==="informacion"){
    return (
      <div>
        <h3>Lista de Usuarios</h3>
        <table className="table table-striped" style={{ marginTop: 20 }}>
          <thead>
            <tr>
              <th>Documento</th>
              <th>Nombre/Apellido</th>
              <th>Telefono</th>
              <th>Correo</th>
              <th>Sucursal</th>
              <th>Rol</th>
            </tr>
          </thead>
          <tbody>{this.recordList()}</tbody>
        </table>
      </div>
    );
  }
  }
}

