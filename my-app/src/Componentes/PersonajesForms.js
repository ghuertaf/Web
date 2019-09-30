import React, {Component} from 'react';

class PersonajeForm extends Component{
    constructor () {
        super();
        this.state = {
          nombre:'',
          titulo:'',
          clase:'',
          dificultad:'',
          icono:''
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.insertaPersonaje(this.state);
        this.setState({
            nombre:'',
            titulo:'',
            clase:'',
            dificultad:'',
            icono:''
        });
    }

    handleInputChange(e) {
        const {value, name} = e.target;
        console.log(value, name);
        this.setState({
          [name]: value
        });
    }

    render() {
        return (
          <div className="card">
            <form onSubmit={this.handleSubmit} className="card-body">
              <div className="form-group">
                <input
                  type="text"
                  name="nombre"
                  className="form-control"
                  value={this.state.nombre}
                  onChange={this.handleInputChange}
                  placeholder="Nombre"
                  />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="titulo"
                  className="form-control"
                  value={this.state.titulo}
                  onChange={this.handleInputChange}
                  placeholder="Titulo"
                  />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="clase"
                  className="form-control"
                  value={this.state.clase}
                  onChange={this.handleInputChange}
                  placeholder="Clase"
                  />
              </div>
              <div className="form-group">
                <select
                    name="dificultad"
                    className="form-control"
                    value={this.state.dificultad}
                    onChange={this.handleInputChange}
                  >
                  <option>Facil</option>
                  <option>Normal</option>
                  <option>Dificil</option>
                </select>
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="icono"
                  className="form-control"
                  value={this.state.icono}
                  onChange={this.handleInputChange}
                  placeholder="Icono"
                  />
              </div>
              <button type="submit" className="btn btn-primary">
                Guardar
              </button>
            </form>
          </div>
        )
      }

}
export default PersonajeForm;