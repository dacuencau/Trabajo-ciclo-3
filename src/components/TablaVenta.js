import React, { Component } from "react";


//export default class TablaVenta extends Component {
export default function TablaVenta(props) {
  const accion = props.visual
  if(accion==="registro"){
    return(
  	  <div>
        <form>
          <label>Id. Venta <input type="text"/></label>
          <label>Cantidad  <input type="number"/></label>
          <label>Precio Unidad  <input type="number"/></label>
          <label>Precio Total   <input type="number"/></label>
          <label>Nombre cliente   <input type="text"/></label>
          <label>Doc. identificacion   <input type="number"/></label>
          <label>Vendedor <input type="text"/></label>
          <label>Fecha   <input type="date"/></label>
          <label>Estado 
            <select name="select">
              <option value="estado1" selected>Sin-estado</option>
              <option value="estado2">En-proceso</option>
              <option value="estado3">Cancelado</option>
              <option value="estado3">Entregado</option>
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
              <th>Name</th>
              <th>Position</th>
              <th>Level</th>
              <th>Action</th>
            </tr>
          </thead>
          {/*<tbody>{this.recordList()}</tbody>*/}
        </table>
      </div>
    );
  }
}
