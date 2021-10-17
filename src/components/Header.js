import React from 'react';
import '../css/header.css';

function Header(){
  return(
    <div className="Header-principal">
      <a href="#">Web-project</a>
      <nav className="Nav-header">
        <ul>
          <li>Usuario</li>
          <li>Administrador</li>
          <li class="button">
            <button type="submit">Cerrar sesión</button>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Header
