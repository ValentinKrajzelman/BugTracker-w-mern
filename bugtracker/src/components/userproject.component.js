import React, { Component } from "react";
import axios from "axios";

export default class userProject extends Component {
  constructor(props) {
    super(props);

    this.state = {
      nombreProyecto: "",
      idProyecto: "",
      versionProyecto: "",
      bugs: [],
    };
  }

  componentDidMount() {
    const id = window.location.href.slice(
      window.location.href.indexOf("Proj/") + 5
    );
    this.setState({
      idProyecto: id,
    });

    axios
      .get("http://localhost:5000/bug/get/" + id)
      .then((res) => {
        if (res.data.length > 0) {
          this.setState({
            bugs: res.data.map((user) => user.bugtext),
          });
        }
      })
      .catch((error) => {
        console.log(error);
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

  render() {
    return (
      <div className="row">
        <div className="col-sm-6 p-4 h1 bg-dark">
          {this.state.nombreProyecto}
          <div className="float-right">
            v.{this.state.versionProyecto}
            <button>cosas</button>
          </div>
        </div>
        <div className="col-sm-2 p-4 h1 bg-success">
          <button className="float-right">Nuevo bug</button>
        </div>
        <div className="col-sm-4 h2 bg-secondary">
          <button className="mt-4 m-1">Pendientes</button>
          <button className="m-1">Resueltos</button>
          <button className="m-1">Todos</button>
        </div>
      </div>
    );
  }
}
