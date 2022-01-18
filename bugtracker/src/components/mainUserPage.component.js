import React from "react";
import { Link } from "react-router-dom";

const mainUserPage = () => {
  return (
    <div className="">
      <div className="">
        <div className="">Bienvenid@ de nuevo :)</div>
        <div className="">
          Si queres crear un nuevo proyecto donde anotar bugs hacer click
          <Link to="newProject" className="">
            <mark>Aca</mark>
          </Link>
          tambien podes crealo clikeando el icono de la barra de navegacion, si
          ya tenes un proyecto seleccionalo en el menu deslizable de arriba.
        </div>
      </div>
      <div className="">
        aca poner alguna imagen de como seleccionar el proyecto o algo asi
      </div>
    </div>
  );
};

export default mainUserPage;
