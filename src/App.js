//import React, { Component } from 'react';
import React from 'react';
import './App.css';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import Admin from './components/Admin';
import Usuario from './components/Usuario';

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
        </Switch>
      </div>
    </BrowserRouter>
  );
}





/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>World</code> and save to reload.
        </p>
      </header>
    </div>
  );
}


class App extends Component {
  state = {
      data: null
  };
  
    componentDidMount() {
      this.callBackendAPI()
        .then(res => this.setState({ data: res.express }))
        .catch(err => console.log(err));
    }
      // fetching the GET route from the Express server which matches the GET route from server.js
    callBackendAPI = async () => {
      const response = await fetch('/express_backend');
      const body = await response.json();
  
      if (response.status !== 200) {
        throw Error(body.message) 
      }
      return body;
    };
  
    render() {
      return (
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <p className="App-intro">{this.state.data}</p>
        </div>
      );
    }
}
*/

export default App;
