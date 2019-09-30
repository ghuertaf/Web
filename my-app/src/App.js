import React, { Component } from 'react';
import './App.css';
import {personajes} from "./personajes.json";
import Navegacion from './Componentes/Navegacion';

// subcomponents
import PersonajeForm from './Componentes/PersonajesForms.js';

class App extends Component {
  constructor (){
    super();
    this.state = {
      personajes
    }
    this.agregaPersonaje = this.agregaPersonaje.bind(this);
  }

  remuevePersonaje(index) {
    this.setState({
      personajes: this.state.personajes.filter((e, i) => {
        return i !== index
      })
    });
  }

  agregaPersonaje(personaje) {
    this.setState({
      personajes: [...this.state.personajes, personaje]
    })
  }

  render () {
    const personajes = this.state.personajes.map((personaje, i) => {
      return(
        <div className="col-md-4" key={i}>
          <div className="card mt-4">
            <div className="card-header">
             <h3>{personaje.nombre}</h3>
             <spam className="text-white">
              {personaje.titulo}
             </spam>
              <div className="text-white">
                {personaje.clase}
              </div>
              <div className="text-white">
                {personaje.dificultad}
              </div>
            </div>     
            <div className = "card-body">
            <img src={personaje.icono}/>
            </div>
            <div className="card-footer">
              <button
                className="btn btn-danger"
                onClick={this.remuevePersonaje.bind(this, i)}>
                Eliminar
              </button>
            </div>
          </div>
        </div>
      )
    }); 
    return (
      <div className="App">

        <nav className="navbar navbar-dark bg-dark">
          <a className="navbar-brand" href="/">
            Personajes
            <span className="badge badge-pill badge-light ml-2">
              {this.state.personajes.length}
            </span>
          </a>
        </nav>

        <div className="container">
          <div className="row mt-4">

            <div className="col-md-4 text-center">
              <PersonajeForm insertaPersonaje={this.agregaPersonaje}></PersonajeForm>
            </div>

            <div className="col-md-8">
              <div className="row">
                {personajes}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;