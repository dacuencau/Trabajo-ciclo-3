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
          <li><h3>Gestión de Usuarios</h3>
            <div className="Sidebar-submenu-vertical">
              <ul>
                <li><Link to="/usr-usuario-reg">Registro</Link></li>
                <li><Link to="/usr-usuario-inf">Información</Link></li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
      <div className="Contenido">  
        <Switch>
          <Route path="/usr-usuario-reg" exact>
            <AdminUsuario admusuario="registro"/>
          </Route>
          <Route path="/usr-usuario-inf" exact>
            <AdminUsuario admusuario="informacion"/>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  )
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
