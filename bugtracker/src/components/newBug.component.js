import React, { Component } from "react";
import axios from "axios";

export default class NewBug extends Component {
  constructor(props) {
    super(props);

    this.subirBug = this.subirBug.bind(this);

    this.state = {
      bugtext: "",
      estado: "",
      fechacreacion: Date(),
      projectId: window.location.href.slice(
        window.location.href.indexOf("NewBug/") + 7
      ),
    };
  }

  componentDidMount() {}

  modificarState(x) {
    let propiedad = x.target.name;
    let valor = x.target.value;
    let aver[propiedad]= valor;
    this.setState(
      {
        propiedad: valor,
      },
      () => {
        console.log(this.state);
      }
    );
  }

  subirBug() {}

  render() {
    return (
      <div>
        <div className="row">Nuevo Bug:</div>
        <div className="row">
          <form>
            <div className="col-sm-8">
              <label>Descripcion breve del bug:</label>
              <textarea
                rows="5"
                onChange={this.modificarState}
                name="bugtext"
                placeholder="ej: No funciona el boton submit del componente newBug."
                className="form-control"
              ></textarea>
            </div>
            <div className="nav-item dropdown navbar-text">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbardrop"
                data-toggle="dropdown"
              >
                Estado
              </a>
              <div className="dropdown-menu" name="estado">
                <div
                  className="dropdown-item"
                  value="pendiente"
                  onClick={this.modificarState}
                >
                  Pendiente
                </div>
                <div className="dropdown-item" name="estado" value="resuelto">
                  Resuelto
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
