// ONLY PRO

import { useState, useEffect } from "react";
import * as API from "../../../services/services.js";
import Navbar from "../../../components/navbar/Navbar";
import Footer from "../../../containers/footer/Footer";

function HistoriaClinica() {
  const [historia, setHistoria] = useState([]);

  useEffect(() => {
    API.getHistoria().then(setHistoria);
  }, []);

  return (
    <div>
      <div className="gradient__bg">
        <Navbar txtBtn1={"Salir"} toLogin={"/"} />
      </div>
      <div className="historia_clinica section__padding">
        <h2>Historia Clinica</h2>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Paciente</th>
              <th>DNI</th>
              <th>Ocupacion</th>
              <th>Estado Civil</th>
              <th>Nacionalidad</th>
              <th>Direccion</th>
              <th>Estudios</th>
              <th>Motivo ingreso</th>
              <th>Antecedentes</th>
            </tr>
          </thead>
          <tbody>
            {historia.map((item, index) => (
              <tr key={index}>
                <td>{item.id_hc}</td>
                <td>{item.paciente}</td>
                <td>{item.dni}</td>
                <td>{item.ocupacion}</td>
                <td>{item.estado_civil}</td>
                <td>{item.pais_origen}</td>
                <td>{item.direccion}</td>
                <td>{item.grado_instruccion}</td>
                <td>{item.motivo_ingreso}</td>
                <td></td>
              </tr>
            ))}
          </tbody>
        </table>
        <a href="#">Ver mas</a>
      </div>
      <Footer direct={"/historia_clinica"} texto2={"Volver arriba"} />
    </div>
  );
}

export default HistoriaClinica;
