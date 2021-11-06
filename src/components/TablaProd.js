import React, { Component }  from 'react';
import '../css/tablaProd.css';

//export default class TablaProd extends Component {
export default function TablaProd(props) {
  const accion = props.visual
  if(accion==="registro"){
    return(
  	  <div>
        <form>
          <label>Id. Producto <input type="text"/></label>
          <label>Descripcion <input type="text"/></label>
          <label>Precio Unidad  <input type="number"/></label>
          <label>Estado   <input type="text"/></label>
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
