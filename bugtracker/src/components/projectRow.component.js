import React, { Component } from "react";
import axios from "axios";

export default class ProjectRow extends Component {
  constructor(props) {
    super(props);

    this.listaBugs = this.listaBugs.bind(this);

    this.state = {
      bugs: [],
    };
  }

  componentDidMount() {
    const id = window.location.href.slice(
      window.location.href.indexOf("Proj/") + 5
    );
    axios
      .get("http://localhost:5000/bug/get/" + id)
      .then((res) => {
        let bugsPorFecha = [];
        if (res.data.length > 0) {
          bugsPorFecha = res.data.sort((a, b) => {
            if (a.fechacreacion < b.fechacreacion) {
              return -1;
            } else if (a.fechacreacion > b.fechacreacion) {
              return 1;
            } else {
              return 0;
            }
          });

          this.setState({
            bugs: bugsPorFecha,
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  listaBugs(estado) {
    let seleccionBugs = [];
    let listaBugs = [];
    if (estado == "pendientes") {
      seleccionBugs = this.state.bugs.filter((bug) => {
        return bug.estado == "pendiente";
      });
    }
    if (estado == "resueltos") {
      seleccionBugs = this.state.bugs.filter((bug) => {
        return bug.estado == "resuelto";
      });
    }
    if (estado == "todos") {
      seleccionBugs = this.state.bugs.map((bug) => {
        return bug;
      });
    }

    for (let x = 0; x < seleccionBugs.length; x++) {
      listaBugs[x] = (
        <div className="row">
          <div className="col-sm-1">Nro.{x + 1}</div>
          <div className="col-sm-4">{seleccionBugs[x].bugtext}</div>
          <div className="col-sm-2">
            {seleccionBugs[x].fechacreacion.slice(2, 10)}{" "}
            {seleccionBugs[x].fechacreacion.slice(11, 19)} hrs
          </div>
          <div className="col-sm-2">{seleccionBugs[x].estado}</div>
          <div className="col-sm-3">
            <button>Hecho</button>
            <button>Modificar</button>
            <button>Borrar</button>
          </div>
        </div>
      );
    }

    return listaBugs;
  }

  render() {
    return (
      <div>
        <div className="row h4 p-1 bg-dark m-0">
          <div className="col-sm-5  ">Bugs</div>
          <div className="col-sm-2 bg-secondary">Fecha de creacion</div>
          <div className="col-sm-2 bg-dark">Estado</div>
          <div className="col-sm-3 bg-dark"></div>
        </div>
        <div>{this.listaBugs(this.props.estadoSeleccionado)}</div>
      </div>
    );
  }
}
