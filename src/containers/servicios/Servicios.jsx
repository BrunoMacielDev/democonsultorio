import React from "react";
import "./servicios.css";
import Articulo from "../../components/articulo/Articulo";
import { servicios1, servicios2, servicios3, servicios5, servicios6, servicios7, servicios8, servicios10 } from "./imports";

const Servicios = () => {
  return (
    <div className="seccion__servicios section__padding" id="blog">
      <div className="seccion__servicios-heading">
        <h1 className="gradient__text">
          Conoce nuestras instalaciones.
        </h1>
      </div>
      <div className="seccion__servicios-container">
        <div className="seccion__servicios-container_groupB">
        <Articulo
            imgUrl={servicios1}
            titulo="HABITACIONES"
            parrafo="Habitaciones muy luminosas y confortables, dobles e individuales, camas ortopédicas con colchones de aire anti escaras, baño privado con TV, aire acondicionado y calefacción."
          />
          <Articulo
            imgUrl={servicios2}
            titulo="CUIDADOS ESPECIALES Y PALIATIVOS"
            parrafo="Piso de cuidados especiales con monitoreo permanente mediante sistema de circuito cerrado."
          />
          <Articulo
            imgUrl={servicios3}
            titulo="ENFERMERÍA"
            parrafo="Office de enfermería en cada piso."
          />
          <Articulo
            imgUrl={servicios5}
            titulo="CONSULTORIOS"
            parrafo="Consultorios para las distintas especialidades."
          />
          <Articulo
            imgUrl={servicios6}
            titulo="FARMACIA"
            parrafo="La farmacia está a cargo de un profesional certificado asegurando la trazabilidad de la medicación"
          />
          <Articulo
            imgUrl={servicios7}
            titulo="SUM"
            parrafo="Amplio salón donde se realizan almuerzos, actividades grupales y recreativas"
          />
          <Articulo
            imgUrl={servicios8}
            titulo="LABORATORIO Y RADIOLOGÍA"
            parrafo="Brindamos servicios de estudios de laboratorio y radiología"
          />
          <Articulo
            imgUrl={servicios10}
            titulo="COCINA"
            parrafo="La cocina está dirigida por nutricionista y chef en tarea conjunta al servicio de la salud y gustos de los pacientes."
          />
        </div>
      </div>
    </div>
  );
};

export default Servicios;
