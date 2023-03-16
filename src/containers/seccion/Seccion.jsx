import React from "react";
import { Link } from "react-router-dom";
import "./seccion.css";
import laptop from "../../assets/laptop.png";
import Obras_sociales from "../../components/obras_sociales/Obras_sociales";
import Caracteristicas from "../caracteristicas/Caracteristicas";
import Servicios from "../servicios/Servicios";
import teachers from "../../assets/teachers.png";

function Seccion() {
  return (
    <>
      <div className="seccion seccion_pad" id="home">
        <div className="seccion-content">
          <h1 className="gradient__text">Servicios de salud de alta calidad</h1>
          <p>
            Brindamos servicios con eficiencia, honestidad y calidez, con un
            excelente equipo humano comprometidos con la recuperación y
            reinserción social de nuestros pacientes.
          </p>
        </div>
        <div className="seccion-image">
          <img src={laptop} alt="laptop" />
        </div>
      </div>
      <div className="seccion__obras">
        <Obras_sociales />
      </div>
      <div className="seccion__body section__margin">
        <div className="seccion__body-feature">
          <div className="seccion__features-container__feature">
            <div className="seccion__features-container__feature-title">
              <div />
              <h1>Profesionales y Equipo</h1>
            </div>
            <div className="seccion__features-container_feature-text">
              <p>
                Contamos con un equipo multidisciplinario de profesionales que
                desde el ingreso contemplan todas las aristas de este complejo
                proceso
              </p>
            </div>
          </div>
        </div>
        <div className="seccion__body-heading">
          <h1 className="gradient__text"> Institucional</h1>
        </div>

        <div className="seccion__body-container">
          <div className="seccion__features-container__feature">
            <div className="seccion__features-container__feature-title">
              <div />
              <h1>Mision</h1>
            </div>
            <div className="seccion__features-container_feature-text">
              <p>
                Brindar servicios de salud de alta calidad con eficiencia,
                honestidad y calidez, mediante el trabajo de un excelente equipo
                humano y el apoyo de nuestra organización empresarial,
                comprometidos con la recuperación y reinserción social de
                nuestros pacientes
              </p>
            </div>
          </div>
          <div className="seccion__features-container__feature">
            <div className="seccion__features-container__feature-title">
              <div />
              <h1>Vision</h1>
            </div>
            <div className="seccion__features-container_feature-text">
              <p>
                Obtener el genuino reconocimiento de la comunidad a los
                constantes esfuerzos del equipo de salud, para que mediante su
                actitud proactiva y la internalización de las acciones de mejora
                contínua logre destacarse como un Centro de Rehabilitación de
                excelencia.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Caracteristicas />
      <div className="pasantias section__padding" id="pasantias">
        <div className="pasantias-image">
          <img src={teachers} alt="possibility" />
        </div>
        <div className="pasantias-content">
          <h4>Capacitaciones internas</h4>
          <h1 className="gradient__text">Capacitación y Docencia</h1>
          <p>
            Las pasantías están destinadas a los alumnos avanzados de las
            Universidades y otras instituciones educativas con las cuales
            nuestra Clínica ha firmado convenios procurando que los mismos
            adquieran experiencia fortaleciendo su aprendizaje. Universidad del
            Salvador (carrera Musicoterapia) / Cruz roja (carrera Enfermería) /
            Fundación Barceló (carrera Kinesiología)
          </p>
          <h4>Martes por medio de cada mes con certificación. </h4>
        </div>
      </div>
      <div className="seccion__registro">
        <div className="seccion__registro-content">
          <p>Registrate como paciente</p>
          <h3>Registrate como paciente para comenzar a conocerte.</h3>
        </div>
        <div className="seccion__registro-btn">
          <button type="button">
            <Link to={"/register-pacientes"}>Registro</Link>
          </button>
        </div>
      </div>
      <Servicios />
    </>
  );
}

export default Seccion;
