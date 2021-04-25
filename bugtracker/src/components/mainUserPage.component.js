import React from "react";
import { Link } from "react-router-dom";

const mainUserPage = () => {
  function cosas() {
    return <div>hola</div>;
  }

  const stuff = cosas();

  return (
    <div className="row m-5">
      <div className="col-sm-7">
        <div className="h1">Bienvenid@ de nuevo :)</div>
        <div className="h4">
          Si queres crear un nuevo proyecto donde anotar bugs hacer click
          <Link to="newProject">
            <mark>Aca</mark>
          </Link>
          tambien podes crealo clikeando el icono de la barra de navegacion, si
          ya tenes un proyecto seleccionalo en el menu deslizable de arriba.
          {stuff}
        </div>
      </div>
      <div className="col-sm-5">
        aca poner alguna imagen de como seleccionar el proyecto o algo asi
      </div>
    </div>
  );
};

export default mainUserPage;
