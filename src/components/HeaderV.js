import React from 'react';
import '../css/header.css';

function HeaderV(){
  return(
    <div className="Header-principal">
      <a href="#">Web-project</a>
      <nav className="Nav-header">
        <ul>
          <li>Usuario:</li>
          <li>Vendedor</li>
          <li class="button">
            <button type="submit">Cerrar sesión</button>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default HeaderV
