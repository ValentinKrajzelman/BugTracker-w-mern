import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default class userProject extends Component {
  constructor(props) {
    super(props);

    this.setUpEstados = this.setUpEstados.bind(this);
    this.constructorRows = this.constructorRows.bind(this);
    this.seleccionEstado = this.seleccionEstado.bind(this);

    this.state = {
      nombreProyecto: "",
      versionProyecto: "",
      estadoActual: "resuelto",
      bugs: [],
      rows: "",
    };
  }

  componentDidMount() {
    this.setUpEstados();
  }

  componentDidUpdate(snapshot) {
    if (
      window.location.href.slice(window.location.href.indexOf("/Proj/")) !==
      snapshot.location.pathname
    ) {
      this.setUpEstados();
    }
  }

  setUpEstados() {
    axios
      .get(
        "http://localhost:5000/bug/get/" +
          window.location.href.slice(window.location.href.indexOf("Proj/") + 5)
      )
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
          this.setState(
            {
              bugs: bugsPorFecha,
            },
            () => this.constructorRows()
          );
        }
      })
      .catch((error) => {
        console.log(error);
      });

    axios
      .get(
        "http://localhost:5000/project/get/" +
          window.location.href.slice(window.location.href.indexOf("Proj/") + 5)
      )
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
    this.setState(
      {
        estadoActual: estado,
      },
      () => this.constructorRows()
    );
  }
  constructorRows() {
    let seleccionBugs = this.state.bugs.filter((bug) => {
      return bug.estado !== this.state.estadoActual;
    });
    let listaBugs = [];
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
    this.setState({ rows: listaBugs });
  }

  render() {
    return (
      <div>
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
              <Link
                to={
                  "/NewBug/" +
                  window.location.href.slice(
                    window.location.href.indexOf("Proj/") + 5
                  )
                }
              >
                <button className="float-right"> New entry</button>
              </Link>
            </div>
            <div className="col-sm-4 h2 m-0 bg-secondary">
              <button
                className=" mt-4 m-1"
                onClick={() => this.seleccionEstado("resuelto")}
              >
                Pendientes
              </button>
              <button
                className="m-1"
                onClick={() => this.seleccionEstado("pendiente")}
              >
                Resueltos
              </button>
              <button
                className="m-1"
                onClick={() => this.seleccionEstado("todo")}
              >
                Todos
              </button>
            </div>
          </div>
        </div>
        {this.state.rows}
      </div>
    );
  }
}
