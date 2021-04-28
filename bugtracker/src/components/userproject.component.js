import React, { Component } from "react";
import axios from "axios";

export default class userProject extends Component {
  constructor(props) {
    super(props);

    this.state = {
      nombreProyecto: "",
      idProyecto: "",
      bugs: [],
    };
  }

  componentDidMount() {
    console.log(window.location.href);

    const id = window.location.href.slice(
      window.location.href.indexOf("Proj/") + 5
    ); //esto te da el id exacto del proyecto que esta renderizado en pantalla usalo para el get de axios de abajo

    console.log(id);

    // axios
    //  .get("http://localhost:5000/bug/get/" + )
  }

  render() {
    return <div>wola</div>;
  }
}
