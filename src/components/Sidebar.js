import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import '../css/sidebar.css';

function Sidebar(){
  return(
    <BrowserRouter>
      <div className="Sidebar-menu-vertical">
        <ul>
          <li><a href="#">Administrador de Ventas</a>
            <div className="Sidebar-submenu-vertical">
              <ul>
                <li><Link to="/adm-ventas-reg">Registro</Link></li>
                <li><Link to="/adm-ventas-inf">Información</Link></li>
                <li><Link to="/adm-ventas-act">Actualización</Link></li>
              </ul>
            </div> 
          </li>
          <li><a href="#">Administrador de Productos</a>
            <div className="Sidebar-submenu-vertical">
              <ul>
                <li><Link to="/adm-producto-reg">Registro</Link></li>
                <li><Link to="/adm-producto-inf">Información</Link></li>
                <li><Link to="/adm-producto-act">Actualización</Link></li>
              </ul>
            </div> 
          </li>
          <li><a href="#">Gestión de Usuarios</a>
            <div className="Sidebar-submenu-vertical">
              <ul>
                <li><Link to="/adm-usuario-reg">Registro</Link></li>
                <li><Link to="/adm-usuario-inf">Información</Link></li>
                <li><Link to="/adm-usuario-act">Actualización</Link></li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
      <div className="Contenido">  
        <Switch>
          <Route path="/adm-ventas-reg">
            <AdminVentasReg />
          </Route>
          <Route path="/adm-ventas-inf">
            <AdminVentasInf />
          </Route>
          <Route path="/adm-ventas-act">
            <AdminVentasAct />
          </Route>
          <Route path="/adm-producto-reg">
            <AdminProductoReg />
          </Route>
          <Route path="/adm-producto-inf">
            <AdminProductoInf />
          </Route>
          <Route path="/adm-producto-act">
            <AdminProductoAct />
          </Route>
          <Route path="/adm-usuario-reg">
            <AdminUsuarioReg />
          </Route>
          <Route path="/adm-usuario-inf">
            <AdminUsuarioInf />
          </Route>
          <Route path="/adm-usuario-act">
            <AdminUsuarioAct />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  )
}

function AdminVentasReg() {
  return (
  <div>
    <h3>Administrador de Ventas</h3>
    <p>Registro de nueva venta</p>
  </div>
  )
}

function AdminVentasInf() {
  return (
  <div>
    <h3>Administrador de Ventas</h3>
    <p>Informacion de ventas</p>
  </div>
  )
}

function AdminVentasAct() {
  return (
  <div>
    <h3>Administrador de Ventas</h3>
    <p>Actualizacion de estado de venta</p>
  </div>
  )
}

function AdminProductoReg() {
  return (
  <div>
    <h3>Administrador de Productos</h3>
    <p>Registro de nuevo Producto</p>
  </div>
  )
}

function AdminProductoInf() {
  return (
  <div>
    <h3>Administrador de Productos</h3>
    <p>Informacion de Productos</p>
  </div>
  )
}

function AdminProductoAct() {
  return (
  <div>
    <h3>Administrador de Productos</h3>
    <p>Actualizacion de informacion de Productos</p>
  </div>
  )
}

function AdminUsuarioReg() {
  return (
  <div>
    <h3>Gestion de Usuarios</h3>
    <p>Registro de nuevo usuario: Rol de usuario</p>
  </div>
  )
}

function AdminUsuarioInf() {
  return (
  <div>
    <h3>Gestion de Usuarios</h3>
    <p>Informacion de usuario</p>
  </div>
  )
}

function AdminUsuarioAct() {
  return (
  <div>
    <h3>Gestion de Usuarios</h3>
    <p>Actualizacion de informacion de usuario</p>
  </div>
  )
}

export default Sidebar
