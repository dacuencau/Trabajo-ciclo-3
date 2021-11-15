import React from 'react';
import LogoutButton from "./LogoutButton";
import '../css/header.css';

function Header(){
  return(
    <div className="Header-principal">
      <a href="#">Web-project</a>
      <nav className="Nav-header">
        <ul>
          <li>Usuario:</li>
          <li>Administrador</li>
          <li class="button">
            <LogoutButton/>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Header
