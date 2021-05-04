import React, { useState } from "react";
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";

const NewProject = () => {
  const { user } = useAuth0();

  const [form, setForm] = useState({
    nombre: "",
    version: "",
    descripcion: "",
    user: user.name,
  });

  const handlechange = (x) => {
    let name = x.target.name;
    let value = x.target.value;
    form[name] = value;
    setForm(form);
  };

  const save = (x) => {
    x.preventDefault();

    axios
      .post("http://localhost:5000/project/post", form)
      .then((res) => console.log(res.data));

    window.location = "/";
  };

  return (
    <div>
      <div className="row">
        <div className="col-sm-4"></div>
        <form className="m-5 col-sm-4 " onSubmit={save}>
          <div className="form-group">
            <label>Nombre del proyecto:</label>
            <input
              name="nombre"
              type="text"
              required
              className="form-control"
              placeholder="ej: BugTracker"
              onChange={handlechange}
            ></input>
            <div className="small">
              *No se puede cambiar una vez creado el projecto.
            </div>
          </div>
          <div className="form-group">
            <label>versión:</label>
            <input
              name="version"
              type="text"
              required
              placeholder="ej: v0.1"
              className="form-control"
              onChange={handlechange}
            ></input>
          </div>
          <div className="form-group">
            <label>Descripcion breve:</label>
            <textarea
              name="descripcion"
              type="text"
              rows="5"
              placeholder="ej: Una pagina web para mantener constancia de bugs en tus proyectos"
              className="form-control"
              onChange={handlechange}
            ></textarea>
          </div>
          <div className="form-group">
            <input
              type="submit"
              value="Create Exercise Log"
              className="btn btn-primary"
            />
          </div>
        </form>
        <div className="col-sm-4"></div>
      </div>
    </div>
  );
};

export default NewProject;
