import React from "react";
import "./caracteristicas.css";

const Caracteristicas = () => {
  return (
    <div className="seccion__features section__padding" id="features">
      <div className="seccion__features-heading">
        <h1 className="gradient__text">
          Funcionalidades
        </h1>
        <p>Las principales funcionalidades disponibles con ShiftFlow</p>
      </div>
      <div className="seccion__features-container">
        <div className="seccion__features-container__feature">
          <div className="seccion__features-container__feature-title">
            <div />
            <h1>Gestor de turnos</h1>
          </div>
          <div className="seccion__features-container_feature-text">
            <p>
              Caracteristica principal del sistema, busca poder solucionar posibles inconvenientes que se presentan cuando se trabaja con turnos. Se podrá agendar, modificar y cancelar los turnos de los clientes y profesionales registrados en el sistema.
            </p>
          </div>
        </div>
        <div className="seccion__features-container__feature">
          <div className="seccion__features-container__feature-title">
            <div />
            <h1>Base de datos</h1>
          </div>
          <div className="seccion__features-container_feature-text">
            <p>
              El sistema cuenta con una base de datos extensa para el almacenamiento de datos de los usuarios, tanto clientes como profesionales ademas de una copia de respaldo para evitar posibles inconvenientes con la perdida de datos importantes.
            </p>
          </div>
        </div>
        <div className="seccion__features-container__feature">
          <div className="seccion__features-container__feature-title">
            <div />
            <h1>Perfiles</h1>
          </div>
          <div className="seccion__features-container_feature-text">
            <p>
              El cliente podra gestionar el perfil del profesional con el que se va a atender asi como tambien gestionar el suyo propio. Misma funcionalidad para los profesionales pero con una informacion mas detallada sobre el cliente.
            </p>
          </div>
        </div>
        <div className="seccion__features-container__feature">
          <div className="seccion__features-container__feature-title">
            <div />
            <h1>Mas!</h1>
          </div>
          <div className="seccion__features-container_feature-text">
            <p>
              Si el cliente de ShiftFlow desea, se pueden agregar mas funcionalidades en funcion de la necesidad del negocio que usara el sistema. Por ejemplo gestion de servicios, apartado de productos, control de stock de insumos, etc.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Caracteristicas;
