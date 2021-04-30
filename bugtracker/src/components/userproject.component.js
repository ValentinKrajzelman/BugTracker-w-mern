import React, { Component } from "react";
import axios from "axios";

import ProjectRow from "./projectRow.component";

export default class userProject extends Component {
  constructor(props) {
    super(props);

    this.seleccionEstado = this.seleccionEstado.bind(this);

    this.state = {
      nombreProyecto: "",
      idProyecto: "",
      versionProyecto: "",
      estadoActual: "",
    };
  }

  componentDidMount() {
    this.setState({
      estadoActual: "pendientes",
    });

    const id = window.location.href.slice(
      window.location.href.indexOf("Proj/") + 5
    );

    this.setState({
      idProyecto: id,
    });

    axios
      .get("http://localhost:5000/project/get/" + id)
      .then((res) => {
        this.setState({
          nombreProyecto: res.data[0].nombre,
          versionProyecto: res.data[0].version,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  seleccionEstado(estado) {
    this.setState({
      estadoActual: estado,
    });
  }

  render() {
    return (
      <div>
        <div className="row m-0">
          <div className="col-sm-6 p-4 h1 m-0 bg-dark">
            {this.state.nombreProyecto}
            <div className="float-right">
              v.{this.state.versionProyecto}
              <button className="h2">cosas</button>
            </div>
          </div>
          <div className="col-sm-2 p-4 h2 m-0 bg-success">
            <button className="float-right">Nuevo bug</button>
          </div>
          <div className="col-sm-4 h2 m-0 bg-secondary">
            <button
              className=" mt-4 m-1"
              onClick={() => this.seleccionEstado("pendientes")}
            >
              Pendientes
            </button>
            <button
              className="m-1"
              onClick={() => this.seleccionEstado("resueltos")}
            >
              Resueltos
            </button>
            <button
              className="m-1"
              onClick={() => this.seleccionEstado("todos")}
            >
              Todos
            </button>
          </div>
        </div>
        <ProjectRow estadoSeleccionado={this.state.estadoActual}></ProjectRow>
      </div>
    );
  }
}
