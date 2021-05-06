import React, { Component } from "react";
import axios from "axios";

export default class NewBug extends Component {
  constructor(props) {
    super(props);

    this.subirBug = this.subirBug.bind(this);
    this.modificarState = this.modificarState.bind(this);
    this.modificarState1 = this.modificarState1.bind(this);
    this.modificarState2 = this.modificarState2.bind(this);
    this.subirBug = this.subirBug.bind(this);

    this.state = {
      bugId: window.location.href.slice(
        window.location.href.indexOf("update/") + 7
      ),
      bugtext: "",
      estado: "",
      fechacreacion: Date(),
      projectId: window.location.href.slice(
        window.location.href.indexOf("NewBug/") + 7,
        window.location.href.indexOf("/update/")
      ),
    };
  }

  componentDidMount() {
    if (this.state.bugId.length < 25) {
      axios
        .get("http://localhost:5000/bug/get/bugid/" + this.state.bugId)
        .then((res) =>
          this.setState(
            {
              bugtext: res.data.bugtext,
              estado: res.data.estado,
              fechacreacion: res.data.fechacreacion,
            },
            () => console.log(this.state)
          )
        )
        .catch((err) => console.log(err));
    }
  }

  modificarState2(x) {
    console.log(this.state);
    this.setState(
      {
        bugtext: x.target.value,
      },
      () => {
        console.log(x.target.value);
      }
    );
  }
  modificarState1(x) {
    this.setState(
      {
        estado: x.target.id,
      },
      () => {
        console.log(this.state.estado);
      }
    );
  }
  modificarState(x) {
    this.setState(
      {
        estado: x.target.id,
      },
      () => {
        console.log(this.state);
      }
    );
  }

  subirBug() {
    this.setState(
      {
        fechacreacion: Date(),
      },
      () => {
        axios
          .post(
            "http://localhost:5000/bug/post/" + this.state.projectId,
            this.state
          )
          .then((res) => console.log(res.data))
          .catch((err) => console.log(err));
      }
    );
    console.log(this.state);
  }

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
                onChange={this.modificarState2}
                name="bugtext"
                placeholder="ej: No funciona el boton submit del componente newBug."
                className="form-control"
                value={this.state.bugtext}
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
                  onClick={this.modificarState1}
                  id="pendiente"
                >
                  Pendiente
                </div>
                <div
                  id="resuelto"
                  className="dropdown-item"
                  name="estado"
                  value="resuelto"
                  onClick={this.modificarState}
                >
                  Resuelto
                </div>
              </div>
            </div>
          </form>
        </div>
        <button className="btn" onClick={this.subirBug}>
          {" "}
          Submit
        </button>
      </div>
    );
  }
}
