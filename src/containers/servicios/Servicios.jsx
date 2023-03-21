import React from "react";
import "./servicios.css";
import Articulo from "../../components/articulo/Articulo";

const Servicios = () => {
  return (
    <div className="seccion__servicios section__padding" id="blog">
      <div className="seccion__servicios-heading">
        <h1 className="gradient__text">
          Solucion ideal
        </h1>
      </div>
      <div className="seccion__servicios-container">
        <div className="seccion__servicios-container_groupB">
        <Articulo
            imgUrl="https://www.materialestetica.com/blog/wp-content/uploads/2019/03/3-pasos-para-montar-un-centro-de-estetica-que-debo-saber.jpg"
            titulo="Esteticas"
            // parrafo=""
          />
          <Articulo
            imgUrl="https://www.namesnack.com/images/Namesnack-nombres-para-cl%C3%ADnicas-m%C3%A9dicas-3428x2333-20210812.jpeg?crop=21:16,smart&width=420&dpr=2"
            titulo="Clinicas medicas"
            // parrafo=""
          />
          <Articulo
            imgUrl="https://www.socialbauru.com.br/wp-content/uploads/2022/03/gabriela-marin-odontologia-estetica-bauru-11-1024x768.jpg"
            titulo="Odontologias"
            // parrafo="Office de enfermería en cada piso."
          />
          <Articulo
            imgUrl="https://cdn.euroinnova.edu.es/img/subidasEditor/peluquer%C3%ADa-1615496220.webp"
            titulo="Peluquerias"
            // parrafo="Consultorios para las distintas especialidades."
          />
          <Articulo
            imgUrl="https://t2.uc.ltmcdn.com/es/posts/5/8/5/cuando_llevar_a_mi_gato_al_veterinario_42585_orig.jpg"
            titulo="Veterinarias"
            // parrafo="La farmacia está a cargo de un profesional certificado asegurando la trazabilidad de la medicación"
          />
          <Articulo
            imgUrl="https://www.clubtalleres.com.ar/wp-content/uploads/2021/11/ACB_6209-scaled.jpg"
            titulo="Centros deportivos"
            // parrafo="Amplio salón donde se realizan almuerzos, actividades grupales y recreativas"
          />
          <Articulo
            imgUrl="https://tueme.co/wp-content/uploads/2022/02/4.2.1-santabarbara-sedes-1-1-1024x683.jpg"
            titulo="Consultorios"
            // parrafo="Brindamos servicios de estudios de laboratorio y radiología"
          />
          <Articulo
            imgUrl="https://www.drake.edu/media/departmentsoffices/kinesiology/images/AnkleTaping.jpg"
            titulo="Centros de rehabilitacion"
            // parrafo="La cocina está dirigida por nutricionista y chef en tarea conjunta al servicio de la salud y gustos de los pacientes."
          />
        </div>
      </div>
    </div>
  );
};

export default Servicios;
