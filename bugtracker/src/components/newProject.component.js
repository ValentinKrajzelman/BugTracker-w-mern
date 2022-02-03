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
    projectId: window.location.href.slice(
      window.location.href.indexOf("newProject/") + 11
    ),
  });

  //tengo que buscar el proyecto en cuestion hacer que se muestre en el input mediante el form y ya esta
  //ademas fijate como acomodas lo del link para que cada boton funcione bien, no tengo tiempo ahora
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

    console.log(form);
    // window.location = "/";
  };

  return (
    <div>
      <div className="">
        <div className=""></div>
        <form className=" " onSubmit={save}>
          <div className="">
            <label>Nombre del proyecto:</label>
            <input
              name="nombre"
              type="text"
              required
              className=""
              placeholder="ej: BugTracker"
              onChange={handlechange}
            ></input>
            <div className="">
              *No se puede cambiar una vez creado el projecto.
            </div>
          </div>
          <div className="">
            <label>versión:</label>
            <input
              name="version"
              type="text"
              required
              placeholder="ej: v0.1"
              className=""
              onChange={handlechange}
            ></input>
          </div>
          <div className="">
            <label>Descripcion breve:</label>
            <textarea
              name="descripcion"
              type="text"
              rows="5"
              placeholder="ej: Una pagina web para mantener constancia de bugs en tus proyectos"
              className=""
              onChange={handlechange}
            ></textarea>
          </div>
          <div className="">
            <input
              type="submit"
              value="Create Exercise Log"
              className=""
            />
          </div>
        </form>
        <div className=""></div>
      </div>
    </div>
  );
};

export default NewProject;
