import React from "react";
import "./caracteristicas.css";

const Caracteristicas = () => {
  return (
    <div className="seccion__features section__padding" id="features">
      <div className="seccion__features-heading">
        <h1 className="gradient__text">
          Valores y principios
        </h1>
        <p>Todo lo que nos proponemos y decimos se traduce en acciones.</p>
      </div>
      <div className="seccion__features-container">
        <div className="seccion__features-container__feature">
          <div className="seccion__features-container__feature-title">
            <div />
            <h1>Responsabilidad</h1>
          </div>
          <div className="seccion__features-container_feature-text">
            <p>
              Clínica Maciel se encarga de analizar, trazar, fundamentar y
              realizar las acciones necesarias que permitan delinear las
              estrategías en función de la rehabilitación del paciente, siendo
              responsables en la transmisión de la información.
            </p>
          </div>
        </div>
        <div className="seccion__features-container__feature">
          <div className="seccion__features-container__feature-title">
            <div />
            <h1>Compromiso</h1>
          </div>
          <div className="seccion__features-container_feature-text">
            <p>
              El compromiso es la motivación que hace que las personas logren
              volver realidad los sueños, las metas y los objetivos trazados en
              toda gran institución, es lo que hace a la excelencia. Implica el
              convencimiento individual de que lo que se hace, se hace por el
              logro de objetivos superiores que traen beneficios a la
              institución, a los pacientes y a nosotros mismos.
            </p>
          </div>
        </div>
        <div className="seccion__features-container__feature">
          <div className="seccion__features-container__feature-title">
            <div />
            <h1>Armonia laboral</h1>
          </div>
          <div className="seccion__features-container_feature-text">
            <p>
              En Clínica Maciel existe el convencimiento de que nada retribuye
              mejor el esfuerzo de sus colaboradores que un ambiente propicio
              para el logro de sus ideales. Cada persona del equipo puede tener
              la certeza de encontrar en las políticas institucionales no sólo
              las mejores oportunidades de progreso, sino el entorno más
              favorable para su realización personal.
            </p>
          </div>
        </div>
        <div className="seccion__features-container__feature">
          <div className="seccion__features-container__feature-title">
            <div />
            <h1>Honestidad</h1>
          </div>
          <div className="seccion__features-container_feature-text">
            <p>
              Clínica Maciel tiene la convicción íntima, firme y constante de
              obrar siempre con el criterio justo, de lo bueno, de lo recto, de
              lo diáfano. En todo momento buscamos la transparencia y la
              integridad siendo rigurosamente fieles a los principios éticos y a
              las normas jurídicas, honrando los compromisos adquiridos con
              nuestros pacientes, con la institución, con los compañeros de
              trabajo, con la familia, con los amigos, con la sociedad y con
              nosotros mismos.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Caracteristicas;
