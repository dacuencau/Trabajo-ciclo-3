import React from 'react';
import { Link } from 'react-router-dom';

const Login = ()=>(
  <section className="Home">
    <h3>Hello Login </h3>
    <p>Verificacion de nuevo enlace: 
    	<Link to="/administrador">Admin</Link>
    </p><br/>
    <p>Registro mediante Google - OAuth2</p>
  </section>
)

export default Login
