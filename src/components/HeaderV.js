import React from 'react';
import '../css/header.css';
import LogoutButton from "./LogoutButton";

function HeaderV(){
  return(
    <div className="Header-principal">
      <a href="#">ZapatosWeb</a>
      <nav className="Nav-header">
        <ul>
          <li>Usuario :</li>
          <li>Vendedor</li>
          <li class="button">
            <LogoutButton/>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default HeaderV
