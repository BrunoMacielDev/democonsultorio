import React from "react";
import { Link } from "react-router-dom";
import "./seccion.css";
import laptop from "../../assets/laptop.png";
import Obras_sociales from "../../components/obras_sociales/Obras_sociales";
import Caracteristicas from "../caracteristicas/Caracteristicas";
import Servicios from "../servicios/Servicios";
import people from "../../assets/people.png";

function Seccion() {
  return (
    <>
      <div className="seccion seccion_pad" id="home">
        <div className="seccion-content">
          <h1 className="gradient__text">Fluidez para vos y tus clientes</h1>
          <p>
            ShiftFlow es un sistema creado para gestionar turnos enfocado a
            mejorar la experiencia del cliente y de los profesionales que lo
            usen.
          </p>
          <p>
            Si estas interesado en contratar el servicio, deja un email aqui debajo.
          </p>
          <div className="seccion__header-content__input">
            <input type="email" placeholder="Email de contacto" />
            <button type="button">Enviar</button>
          </div>
          <div className="seccion__header-content__people">
            <img src={people} alt="people" />
            <p>Elegido por +20 emprendedores.</p>
          </div>
        </div>
        <div className="seccion-image">
          <img src={laptop} alt="laptop" />
        </div>
      </div>

      <div className="seccion__body section__margin">
        <div className="seccion__body-feature">
          <div className="seccion__features-container__feature">
            <div className="seccion__features-container__feature-title">
              <div />
              <h1>Gestion de usuarios</h1>
            </div>
            <div className="seccion__features-container_feature-text">
              <p>
                Tus profesionales podran gestionar los turnos de sus clientes y
                viceversa, la idea es que sea una conexion entre
                profesional-cliente mas fluida.
              </p>
            </div>
          </div>
        </div>
        <div className="seccion__body-heading">
          <h1 className="gradient__text"> Usuarios</h1>
        </div>

        <div className="seccion__body-container">
          <div className="seccion__features-container__feature">
            <div className="seccion__features-container__feature-title">
              <div />
              <h1>Clientes</h1>
            </div>
            <div className="seccion__features-container_feature-text">
              <p>
                Podran elegir el turno que deseen para luego ser confirmado por
                el profesional. Podran elegir con que profesional atenderse y
                ver datos del mismo.
              </p>
            </div>
          </div>
          <div className="seccion__features-container__feature">
            <div className="seccion__features-container__feature-title">
              <div />
              <h1>Profesionales</h1>
            </div>
            <div className="seccion__features-container_feature-text">
              <p>
                Podran gestionar una lista de clientes con los ultimos turnos de
                los mismos ademas de poder agendar, modificar o cancelar el
                turno a un cliente en particular
              </p>
            </div>
          </div>
        </div>
      </div>
      <Caracteristicas />
      <div className="seccion__registro">
        <div className="seccion__registro-content">
          <p>Sistema a medida</p>
          <h3>
            Si quieres una experiencia mas personalizada y adaptada a tu negocio
          </h3>
        </div>
        <div className="seccion__registro-btn">
          <button type="button">
            <Link to={"https://www.linkedin.com/in/brunomacieldev/"}>
              Contacto
            </Link>
          </button>
        </div>
      </div>
      <Servicios />
    </>
  );
}

export default Seccion;
