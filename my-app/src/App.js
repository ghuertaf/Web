import React, { Component } from 'react';
import './App.css';
import {personajes} from "./personajes.json";
import Navegacion from './Componentes/Navegacion';

class App extends Component {
  constructor (){
    super();
    this.state = {
      personajes:personajes
    }
  }
  render () {
    const personajes = this.state.personajes.map((personaje, i) => {
      return(
        <div className="col-md-4">
          <div className="card mt-4">
            <div className="card-header">
             <h3>{personaje.nombre}</h3>
             <spam className="badge badge-pill badge-danger ml-2">
              {personaje.nombre}
             </spam>
            </div>            
            <div className = "card-body">
            <img src={personaje.icono}/>
            </div>
          </div>
        </div>
      )
    }); 
    return (
      <div className="App">  
        <Navegacion titulo="Personajes"/>
        <div className="container"> 
          <div className="row mt-4">
            {personajes}
          </div>
        </div>
      </div>
    );
  }
}

export default App;