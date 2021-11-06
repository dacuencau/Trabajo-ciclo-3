import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import '../css/sidebar.css';
import TablaVenta from './TablaVenta';
import TablaProd from './TablaProd';
import TablaUsuario from './TablaUsuario';

function Sidebar(){
  return(
    <BrowserRouter>
      <div className="Sidebar-menu-vertical">
        <ul>
          <li><h3> Administrador de Ventas</h3>
            <div className="Sidebar-submenu-vertical">
              <ul>
                <li><Link to="/adm-ventas-reg">Registro</Link></li>
                <li><Link to="/adm-ventas-inf">Información</Link></li>
              </ul>
            </div> 
          </li>
          <li><h3>Administrador de Productos</h3>
            <div className="Sidebar-submenu-vertical">
              <ul>
                <li><Link to="/adm-producto-reg">Registro</Link></li>
                <li><Link to="/adm-producto-inf">Información</Link></li>
              </ul>
            </div> 
          </li>
          <li><h3>Gestión de Usuarios</h3>
            <div className="Sidebar-submenu-vertical">
              <ul>
                <li><Link to="/adm-usuario-reg">Registro</Link></li>
                <li><Link to="/adm-usuario-inf">Información</Link></li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
      <div className="Contenido">  
        <Switch>
          <Route path="/adm-ventas-reg" exact>
            <AdminVentas admventas="registro"/>
          </Route>
          <Route path="/adm-ventas-inf" exact>
            <AdminVentas admventas="informacion"/>
          </Route>
          <Route path="/adm-producto-reg" exact>
            <AdminProducto admproducto="registro"/>
          </Route>
          <Route path="/adm-producto-inf" exact>
            <AdminProducto admproducto="informacion"/>
          </Route>
          <Route path="/adm-usuario-reg" exact>
            <AdminUsuario admusuario="registro"/>
          </Route>
          <Route path="/adm-usuario-inf" exact>
            <AdminUsuario admusuario="informacion"/>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  )
}

function AdminVentas(props) {
  const accion = props.admventas
  if(accion==="registro"){
    return (
      <div>
        <h3>Administrador de Ventas</h3>
        <p>Registro de nueva venta</p>
        <TablaVenta visual={accion}/>
      </div>
    )
  }else if(accion==="informacion"){
    return(
      <div>
        <h3>Administrador de Ventas</h3>
        <p>Informacion de ventas</p>
        <TablaVenta visual={accion}/>
      </div>
    )
  }
}

function AdminProducto(props) {
  const accion = props.admproducto
  if(accion==="registro"){
    return (
    <div>
      <h3>Administrador de Productos</h3>
      <p>Registro de nuevo Producto</p>
      <TablaProd visual={accion}/>
    </div>
    )
  }else if(accion==="informacion"){
    return(
    <div>
      <h3>Administrador de Productos</h3>
      <p>Informacion de Productos</p>
      <TablaProd visual={accion}/>
    </div>
    )
  }
}

function AdminUsuario(props) {
  const accion = props.admusuario
  if(accion==="registro"){
    return (
      <div>
        <h3>Gestion de Usuarios</h3>
        <p>Registro de nuevo usuario: Rol de usuario</p>
        <TablaUsuario visual={accion}/>
      </div>
    )
  }else if(accion==="informacion"){
    return(
      <div>
        <h3>Gestion de Usuarios</h3>
        <p>Informacion de usuario</p>
        <TablaUsuario visual={accion}/>
      </div>
    )
  }
}

export default Sidebar
