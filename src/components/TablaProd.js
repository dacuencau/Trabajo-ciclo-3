import React, { Component }  from 'react';
import '../css/tablaProd.css';
import '../css/tablas.css';
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
  //this.state = { records: [] };
    this.state = {
      title: "",
      description: "",
      price: 0,
      url: "",
      categoria: "",
      disponible: "",
    records: [],
    };
   
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangePrice = this.onChangePrice.bind(this);
    this.onChangeUrl = this.onChangeUrl.bind(this);
    this.onChangeCategoria = this.onChangeCategoria.bind(this);
    this.onChangeDisponible = this.onChangeDisponible.bind(this);
    
  }
  
    // These methods will update the state properties.
  onChangeTitle(e) {
    this.setState({
      title: e.target.value,
    });
  }
 
  onChangeDescription(e) {
    this.setState({
      description: e.target.value,
    });
  }
     // These methods will update the state properties.
  onChangePrice(e) {
    this.setState({
      price: e.target.value,
    });
  }
 
  onChangeUrl(e) {
    this.setState({
      url: e.target.value,
    });
  }
     // These methods will update the state properties.
  onChangeCategoria(e) {
    this.setState({
      categoria: e.target.value,
    });
  }
 
  onChangeDisponible(e) {
    this.setState({
      disponible: e.target.value,
    });
  }
  
  onSubmit=(e)=> {
    e.preventDefault();
 
    // When post request is sent to the create url, axios will add a new record to the database.
    const newproduct = {
      title: this.state.title,
      description: this.state.description,
      price: this.state.price,
      url: this.state.url,
      categoria: this.state.categoria,
      disponible: this.state.disponible,
    };
 
    axios
      .post("http://localhost:5000/api/Productos", newproduct)
      .then((res) => console.log(res.data));
 
    // We will empty the state after posting the data to the database
    this.setState({
      title: "",
      description: "",
      price: 0,
      url: "",
      categoria: "",
      disponible: "",
    });
  }
 
// Mostrar Informacion del producto  
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
    axios.delete("http://localhost:5000/api/Productos/" + id).then((response) => {
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
        <form onSubmit={this.onSubmit}>
          <label>Titulo<input type="text"
              value={this.state.title}
              onChange={this.onChangeTitle}/></label>
          <label>Descripcion<input type="text"
              value={this.state.description}
              onChange={this.onChangeDescription}/></label>
          <label>Precio<input type="number" step="0.01"
              value={this.state.price}
              onChange={this.onChangePrice}/></label>
          <label>url<input type="text"
              value={this.state.url}
              onChange={this.onChangeUrl}/></label>
          <label>Categoria<input type="text"
              value={this.state.categoria}
              onChange={this.onChangeCategoria}/></label>
          <div>
            <label>
            <input type="radio"
                name="priorityOptions"
                value="Disponible"
                checked={this.state.disponible === "Disponible"}
                onChange={this.onChangeDisponible}
            />Disponible</label>
            <label>
            <input type="radio"
                name="priorityOptions"
                value="No-disponible"
                checked={this.state.disponible === "No-disponible"}
                onChange={this.onChangeDisponible}
            />No-disponible</label>
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
        <h3>Lista de Productos</h3>
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


