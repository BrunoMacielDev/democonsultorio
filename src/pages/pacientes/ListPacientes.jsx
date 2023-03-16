// ONLY PRO

import { useState, useEffect } from "react";
import "./pacientes.css";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../containers/footer/Footer";
import * as API from "../../services/services";
import { IoEye, IoCalendarNumber } from "react-icons/io5";
import { Link } from "react-router-dom";
import moment from "moment";

function ListPacientes() {
  const [pacientes, setPacientes] = useState([]);

  useEffect(() => {
    API.getPacientes().then(setPacientes);
  }, []);

  return (
    <>
      <div className="gradient__bg">
        <Navbar />
      </div>
      <div className="gradient__bg">
        <div className="pacientes__heading">
          <h1 className="gradient__text">Pacientes</h1>
        </div>
        <div className="lista_pacientes">
          <table>
            <thead>
              <tr>
                <th>Paciente</th>
                <th>DNI</th>


                <th>Cobertura medica</th>
                <th>Fecha de ingreso</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {pacientes.map((item, index) => (
                <tr key={index}>
                  <td>{item.paciente}</td>
                  <td>{item.dni}</td>
                  {/* <td>{moment(item.fecha_nacimiento).format("YYYY-MM-DD")}</td> */}

                  <td>{item.cobertura_medica}</td>
                  <td>{moment(item.fecha_ingreso).format("YYYY-MM-DD")}</td>
                  <td>
                    {/* className="pacientes__hc-btn" */}
                    <div className="turnos__actions">
                      <button type="button">
                        <Link to={"/perfil/pacientes/" + item.id_paciente}>
                          {<IoEye />}
                        </Link>
                      </button>
                      <button type="button">
                        <Link to={"/turnos/" + item.id_paciente}>
                          {<IoCalendarNumber />}
                        </Link>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ListPacientes;
