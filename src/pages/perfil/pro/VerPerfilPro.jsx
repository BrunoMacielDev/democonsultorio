// ONLY PAC

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Footer from "../../../containers/footer/Footer";
import "./perfilPro.css";
import * as API from "../../../services/services.js";
import moment from "moment";
import { MdLoop } from "react-icons/md";
import { useToast } from "@chakra-ui/react";
import { SolicitarTurnoCard, Navbar } from "../../../components/index";

function VerPerfilPro() {
  const { id_pro } = useParams();
  const toast = useToast();
  const [pacID, setPacID] = useState("");
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [email, setEmail] = useState("");
  const [area, setArea] = useState("");
  const [matricula, setMatricula] = useState("");
  const [turnos, setTurnos] = useState("");

  useEffect(() => {
    const pacienteLogueado = JSON.parse(localStorage.getItem("paciente"));
    if (pacienteLogueado) {
      setPacID(pacienteLogueado.data[0].id_paciente);
    }
  }, []);

  useEffect(()=>{
    handleTurnos(id_pro,pacID)
  },[])

  const handleTurnos = async () => {
    const pacienteLogueado = JSON.parse(localStorage.getItem("paciente"));
    const datos_turnos = await API.getTurnosForPac(id_pro, {id_paciente: pacienteLogueado.data[0].id_paciente});
    setTurnos(datos_turnos);
  };

  useEffect(() => {
    handleData(id_pro);
  }, []);

  const handleData = async () => {
    const datos_pro = await API.getProfesionalById(id_pro);
    setNombre(datos_pro.nombre);
    setApellido(datos_pro.apellido);
    setEmail(datos_pro.email);
    setArea(datos_pro.area);
    setMatricula(datos_pro.matricula);
  };

  const handleBajaTurno = async (turnoID) => {
    const response = await API.deleteBajaTurno(turnoID);
    if (response.status) {
      toast({
        title: response.message,
        status: "warning",
        isClosable: true,
      });
    } else {
      toast({
        title: response.message,
        status: "error",
        isClosable: true,
      });
    }
  };

  return (
    <>
      <div className="gradient__bg">
        <Navbar txtBtn1={"Salir"} toLogin={"/"} />
      </div>
      <div className="gradient__bg">
        <div className="container__perfilPro">
          <div className="container__perfilPro-card">
            <div className="container__perfilPro-card_column">
              <form>
                <p>Profesional</p>
                <h3>
                  {nombre} {apellido}
                </h3>
                <p>Correo</p>
                <h3>{email}</h3>
                <p>Area</p>
                <h3>{area}</h3>
                <p>Matricula</p>
                <h3>{matricula}</h3>
              </form>
            </div>
          </div>
          <SolicitarTurnoCard
            title={"Solicitar turno"}
            id_pro={id_pro}
            pacID={pacID}
          />
        </div>
        <div className="list_turnos">
          <div className="list-header">
            <h2>Historial de turnos</h2>
            <MdLoop onClick={handleTurnos} />
          </div>

          {turnos == "" ? (
            <h2>No existen turnos</h2>
          ) : (
            <table>
              <thead>
                <tr>
                  <th>Turno</th>
                  <th>Estado</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                {turnos.map((item, index) => (
                  <tr key={index}>
                    <td>
                      {moment(item.fecha).format("ll")} a las {item.hora}
                    </td>
                    <td>{item.estado}</td>
                    <td>
                      <div className="turnos-btn">
                        {item.estado == "Activo" ? (
                          <button
                            type="button"
                            onClick={() => handleBajaTurno(item.id_turno)}
                          >
                            Cancelar
                          </button>
                        ) : (
                          ""
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
      <div className="Footer">
        <Footer />
      </div>
    </>
  );
}

export default VerPerfilPro;
