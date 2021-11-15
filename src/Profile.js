import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from 'react-router-dom';

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated && (
      <div>
        <img src={user.picture} alt={user.name} />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
    <p>Verificacion de nuevo enlace: 
      <br/>
    	<Link to="/administrador">Administrador</Link>
      <br/> 
        <Link to="/vendedor">Vendedor</Link>
      <br/>
    	<Link to="/usuario">Usuario</Link>
    </p><br/>
      </div>
    )
  );
};

export default Profile;

