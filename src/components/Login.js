import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import Profile from "../Profile";

const Login = ()=>{
  const { isAuthenticated, isLoading } = useAuth0();
  
  if (isLoading){
    return <h1>Is Loading ...</h1>
  }
  
  return(
  <section className="Home">
    <h3>Hello Login </h3>
    <p>Verificacion de nuevo enlace: 
      <br/>
    	<Link to="/administrador">Admin</Link>
      <br/> 
     <Link to="/vendedor">Vend</Link>
    </p><br/>
    <p>
    	<Link to="/usuario">Usuario</Link>
    </p><br/>
    <p>Registro mediante Google - OAuth2</p>
    { isAuthenticated ? <LogoutButton/> : <LoginButton/> }
    <Profile/>
  </section>
  );
};

export default Login
