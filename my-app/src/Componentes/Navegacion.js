import React, {Component} from 'react';

class Navegacion extends Component{
    render() {
        return(
            <nav>
                <a href = "" className="card-header">
                    { this.props.titulo }
                </a>
            </nav>
        )
    }
}

export default Navegacion;