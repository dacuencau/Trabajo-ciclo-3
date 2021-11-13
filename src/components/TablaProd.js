import React, { Component }  from 'react';
import '../css/tablaProd.css';
import axios from 'axios';
import { Link } from "react-router-dom";


const Record = (props) => (
  <tr>
    <td>{props.record.title}</td>
    <td>{props.record.description}</td>
    <td>{props.record.price}</td>
    <td>{props.record.url}</td>
    <td>{props.record.categoria}</td>
    <td>{props.record.disponible}</td>
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


export default class TablaProd extends Component {
  constructor(props) {
  super(props);
  this.deleteRecord = this.deleteRecord.bind(this);
  this.state = { records: [] };
  }
  
    componentDidMount() {
    axios
      .get("http://localhost:5000/api/Productos/")
      .then((response) => {
        this.setState({ records: response.data });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  // This method will delete a record based on the method
  deleteRecord(id) {
    axios.delete("http://localhost:5000/" + id).then((response) => {
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
  
//export default function TablaProd(props) {
  render(){
  const accion = this.props.visual;
  if(accion==="registro"){
    return(
  	  <div>
        <form>
          <label>Id. Producto <input type="text"/></label>
          <label>Descripcion <input type="text"/></label>
          <label>Precio Unidad  <input type="number"/></label>
          <label>Estado
            <select name="select">
              <option value="estado1" selected>Sin-estado</option>
              <option value="estado2">Disponible</option>
              <option value="estado3">No-disponible</option>
            </select>
          </label>
          <button>Enviar Datos</button>
        </form>
   	  </div>
    )
  }else if(accion==="informacion"){
    return (
      <div>
        <h3>Record List</h3>
        <table className="table table-striped" style={{ marginTop: 20 }}>
          <thead>
            <tr>
              <th>Titulo</th>
              <th>Descripcion</th>
              <th>Precio</th>
              <th>URL</th>
              <th>Categoria</th>
              <th>Disponible</th>
            </tr>
          </thead>
            <tbody>{this.recordList()}</tbody>
        </table>
      </div>
    );
  }
  }
}



{/*
const Record = (props) => (
  <tr>
    <td>{props.record.person_name}</td>
    <td>{props.record.person_position}</td>
    <td>{props.record.person_level}</td>
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

export default class RecordList extends Component {
  // This is the constructor that shall store our data retrieved from the database
  constructor(props) {
    super(props);
    this.deleteRecord = this.deleteRecord.bind(this);
    this.state = { records: [] };
  }

  // This method will get the data from the database.
  componentDidMount() {
    axios
      .get("http://localhost:5000/record/")
      .then((response) => {
        this.setState({ records: response.data });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  // This method will delete a record based on the method
  deleteRecord(id) {
    axios.delete("http://localhost:5000/" + id).then((response) => {
      console.log(response.data);
    });

    this.setState({
      record: this.state.records.filter((el) => el._id !== id),
    });
  }

  // This method will map out the users on the table
  recordList() {
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

  // This following section will display the table with the records of individuals.
  render() {
    return (
      <div>
        <h3>Record List</h3>
        <table className="table table-striped" style={{ marginTop: 20 }}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Position</th>
              <th>Level</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>{this.recordList()}</tbody>
        </table>
      </div>
    );
  }
}

*/}
