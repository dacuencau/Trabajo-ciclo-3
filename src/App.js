import React from 'react';
import './App.css';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import Admin from './components/Admin';
import Usuario from './components/Usuario';
import Vend from  './components/Vend';


function App(){
  return(
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path={["/"]} component={Login}/>
          <Route exact path={["/administrador",
            "/adm-ventas-reg","/adm-ventas-inf",
            "/adm-producto-reg","/adm-producto-inf",
            "/adm-usuario-reg","/adm-usuario-inf"]} component={Admin}/>
          <Route exact path={["/usuario",
            "/usr-usuario-reg","/usr-usuario-inf"]} component={Usuario} />
          <Route exact path={["/vendedor",
            "/vnt-ventas-reg","/vnt-ventas-inf",
            "/vnt-producto-reg","/vnt-producto-inf"]} component={Vend}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
