import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default class ProjectList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      lista: "",
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/project/get/")
      .then((res) => {
        let listaProyectos = [];
        for (let x = 0; x < Object.keys(res.data).length; x++) {
          listaProyectos[x] = (
            <Link to={"/Proj/" + res.data[x]._id} className="">
              {res.data[x].nombre}
            </Link>
          );
        }
        this.setState({ lista: listaProyectos });
      })

      .catch((error) => console.log(error));
  }

  render() {
    return this.state.lista;
  }
}
