import React, { Component } from "react";


//export default class TablaVenta extends Component {
export default function TablaUsuario(props) {
  const accion = props.visual
  if(accion==="registro"){
    return(
  	  <div>
        <form>
          <label>Nombre <input type="text"/></label>
          <label>Apellido <input type="text"/></label>
          <label>Cantidad  <input type="number"/></label>
          <label>Doc. identificacion   <input type="number"/></label>
          <label>Estado 
            <select name="select">
              <option value="value1" selected>usuario</option>
              <option value="value2">vendedor</option>
              <option value="value3">administrador</option>
            </select>
          </label>
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

