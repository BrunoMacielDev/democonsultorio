import moment from "moment";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../containers/footer/Footer";
import * as API from "../../services/services";
import "./dashboard.css";

function Dashboard() {
  const { id_paciente } = useParams();
  const { id_pro } = useParams();
  const [pacID, setPacID] = useState("");
  const [proID, setProID] = useState("");
  const [ultimoTurno, setUltimoTurno] = useState({
    fecha: "",
    hora: "",
    profesional: "",
    paciente: "",
  });
  const [turnoPendiente, setTurnoPendiente] = useState("");
  const [turnoConfirmar, setTurnoConfirmar] = useState("");
  const [turnoActivo, setTurnoActivo] = useState("");
  const [turnosHoy, setTurnosHoy] = useState("");
  const [proximoTurno, setProximoTurno] = useState({
    fecha: "",
    hora: "",
    profesional: "",
    id_pro: "",
    paciente: "",
    id_paciente: "",
  });

  useEffect(() => {
    const pacienteLogueado = JSON.parse(localStorage.getItem("paciente"));
    if (pacienteLogueado) {
      setPacID(pacienteLogueado.data[0].id_paciente);
    }
  }, []);

  useEffect(() => {
    const profesionalLogueado = JSON.parse(localStorage.getItem("profesional"));
    if (profesionalLogueado) {
      setProID(profesionalLogueado.data[0].id_pro);
    }
  }, []);

  useEffect(() => {
    if (id_paciente) {
      handleUltimoTurno(pacID);
      handleTurnoPendiente(pacID);
      handleTurnoActivo(pacID);
      handleProximoTurno(pacID);
    }
    if (id_pro) {
      handleUltimoTurno(proID);
      handleTurnoConfirmar(proID);
      handleTurnosHoy(proID);
      handleProximoTurno(proID);
    }
  }, []);

  const handleUltimoTurno = async () => {
    const pacienteLogueado = JSON.parse(localStorage.getItem("paciente"));
    const profesionalLogueado = JSON.parse(localStorage.getItem("profesional"));
    if (pacienteLogueado) {
      const response = await API.getUltimoTurno(
        pacienteLogueado.data[0].id_paciente
      );
      if (response.status) {       
        setUltimoTurno({
          fecha: moment(response.datos[0].fecha).format("LL"),
          hora: response.datos[0].hora,
          profesional: response.datos[0].profesional,
        });
      }
    }
    if (profesionalLogueado) {
      const response = await API.getUltimoTurnoPro(
        profesionalLogueado.data[0].id_pro
      );
      if (response.status) {
        setUltimoTurno({
          fecha: moment(response.datos[0].fecha).format("LL"),
          hora: moment(response.datos[0].hora, "hh:mm").format("HH:mm"),
          paciente: response.datos[0].paciente,
        });
      }
    }
  };

  const handleTurnoConfirmar = async () => {
    const profesionalLogueado = JSON.parse(localStorage.getItem("profesional"));
    const response = await API.getTurnosConfirmar(
      profesionalLogueado.data[0].id_pro
    );
    if (response.status) {
      setTurnoConfirmar(response.datos[0].cantidad_turnos);
    }
  };

  const handleTurnosHoy = async () => {
    const profesionalLogueado = JSON.parse(localStorage.getItem("profesional"));
    const response = await API.getTurnosHoy(
      profesionalLogueado.data[0].id_pro
    );
    if (response.status) {
      setTurnosHoy(response.datos[0].cantidad_turnos);
    }
  };

  const handleTurnoPendiente = async () => {
    const pacienteLogueado = JSON.parse(localStorage.getItem("paciente"));
    const response = await API.getTurnoPendiente(
      pacienteLogueado.data[0].id_paciente
    );
    if (response.status) {
      setTurnoPendiente(response.datos[0].cantidad_turnos);
    }
  };

  const handleTurnoActivo = async () => {
    const pacienteLogueado = JSON.parse(localStorage.getItem("paciente"));
    const response = await API.getTurnoActivo(
      pacienteLogueado.data[0].id_paciente
    );
    if (response.status) {
      setTurnoActivo(response.datos[0].cantidad_turnos);
    }
  };

  const handleProximoTurno = async () => {
    const pacienteLogueado = JSON.parse(localStorage.getItem("paciente"));
    const profesionalLogueado = JSON.parse(localStorage.getItem("profesional"));

    if (pacienteLogueado) {
      const response = await API.getProximoTurno(
        pacienteLogueado.data[0].id_paciente
      );
      if (response.status) {
        setProximoTurno({
          fecha: moment(response.datos[0].fecha).format("LL"),
          hora: moment(response.datos[0].hora, "hh:mm").format("HH:mm"),
          profesional: response.datos[0].profesional,
          id_pro: response.datos[0].id_pro,
        });
      }
    }
    if (profesionalLogueado) {
      const response = await API.getProximaConsulta(
        profesionalLogueado.data[0].id_pro
      );
      if (response.status) {
        setProximoTurno({
          fecha: moment(response.datos[0].fecha).format("LL"),
          hora: moment(response.datos[0].hora, "hh:mm").format("HH:mm"),
          paciente: response.datos[0].paciente,
          id_paciente: response.datos[0].id_paciente,
        });
      }
    }
  };

  return (
    <>
      <div className="gradient__bg">
        <Navbar />
      </div>
      {pacID ? (
        <>
          <div className="container__dashboard gradient__bg section__padding">
            <div className="container__dashboard-heading">
              <h1 className="gradient__text">Dashboard paciente</h1>
            </div>
            <div className="container__dashboard-container">
              <div className="container__dashboard-container_groupA">
                <div className="container__dashboard-container_card">
                  <div className="container__dashboard-container_card-image">
                    <img
                      src={
                        "http://www.consultoriosmorales.com.ar/es/images/pictures/imagen-morales.jpg"
                      }
                      alt="imagen"
                    />
                  </div>
                  <div className="container__dashboard-container_card-content">
                    <div>
                      <p>Panel principal</p>
                      <h3>
                        Proximo turno
                        <hr />
                        {proximoTurno.fecha ? (
                          <>
                            {proximoTurno.fecha}, {proximoTurno.hora}hs
                          </>
                        ) : (
                          <p>Aun no tiene turnos agendados</p>
                        )}
                      </h3>
                    </div>
                    <Link to={"/solicitar-turno"}>Ir a turnos</Link>
                  </div>
                </div>
              </div>
              <div className="container__dashboard-container_groupB">
                <div className="container__dashboard-container_card">
                  <div className="container__dashboard-container_card-content">
                    <div>
                      <p>Turnos pendientes</p>
                      <h3>{turnoPendiente ? turnoPendiente : 0}</h3>
                    </div>
                    <Link to={"/solicitar-turno"}>Ver turnos</Link>
                  </div>
                </div>
                <div className="container__dashboard-container_card">
                  <div className="container__dashboard-container_card-content">
                    <div>
                      <p>Turnos activos</p>
                      <h3>{turnoActivo ? turnoActivo : 0}</h3>
                    </div>
                    <Link to={"/solicitar-turno"}>Ver turnos</Link>
                  </div>
                </div>
                <div className="container__dashboard-container_card">
                  <div className="container__dashboard-container_card-content">
                    <div>
                      <p>Ultima consulta</p>
                      <h3>
                        {ultimoTurno.fecha ? (
                          <>
                            {ultimoTurno.fecha}
                            {<hr />}
                            {ultimoTurno.profesional}
                          </>
                        ) : (
                          <p>Aun no tiene turnos</p>
                        )}
                      </h3>
                    </div>
                    <Link to={"/solicitar-turno"}>Ver turnos</Link>
                  </div>
                </div>
                <div className="container__dashboard-container_card">
                  <div className="container__dashboard-container_card-content">
                    <div>
                      <p>Proxima consulta con</p>
                      <h3>
                        {proximoTurno.profesional
                          ? proximoTurno.profesional
                          : "Aun no tiene turnos"}
                      </h3>
                    </div>
                    {proximoTurno.id_pro ? (
                      <Link
                        to={"/ver-perfil/profesional/" + proximoTurno.id_pro}
                      >
                        Ver profesional
                      </Link>
                    ) : (
                      <Link to={"/profesionales/"}>Ver profesionales</Link>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <></>
      )}

      {proID ? (
        <>
          <div className="container__dashboard gradient__bg section__padding">
            <div className="container__dashboard-heading">
              <h1 className="gradient__text">Dashboard profesional</h1>
            </div>
            <div className="container__dashboard-container">
              <div className="container__dashboard-container_groupA">
                <div className="container__dashboard-container_card">
                  <div className="container__dashboard-container_card-image">
                    <img
                      src={
                        "http://www.consultoriosmorales.com.ar/es/images/pictures/imagen-morales.jpg"
                      }
                      alt="imagen"
                    />
                  </div>
                  <div className="container__dashboard-container_card-content">
                    <div>
                      <p>Panel principal</p>
                      <h3>
                        Proximo turno
                        <hr />
                        {proximoTurno.fecha ? (
                          <>
                            {proximoTurno.fecha}, {proximoTurno.hora}hs
                          </>
                        ) : (
                          <p>Aun no tiene turnos agendados</p>
                        )}
                      </h3>
                    </div>
                    <Link to={"/ver-turnos/"+proID}>Ir a turnos</Link>
                  </div>
                </div>
              </div>
              <div className="container__dashboard-container_groupB">
                <div className="container__dashboard-container_card">
                  <div className="container__dashboard-container_card-content">
                    <div>
                      <p>Turnos a confirmar</p>
                      <h3>{turnoConfirmar ? turnoConfirmar : 0}</h3>
                    </div>
                    <Link to={"/ver-turnos/"+proID}>Ver turnos</Link>
                  </div>
                </div>
                <div className="container__dashboard-container_card">
                  <div className="container__dashboard-container_card-content">
                    <div>
                      <p>Turnos activos para hoy</p>
                      <h3>{turnosHoy ? turnosHoy : 0}</h3>
                    </div>
                    <Link to={"/ver-turnos/"+proID}>Ver turnos</Link>
                  </div>
                </div>
                <div className="container__dashboard-container_card">
                  <div className="container__dashboard-container_card-content">
                    <div>
                      <p>Ultima consulta</p>
                      <h3>
                        {ultimoTurno.fecha ? (
                          <>
                            {ultimoTurno.fecha}, {ultimoTurno.hora}hs
                            {<hr />}
                            <p>{ultimoTurno.paciente}</p>
                          </>
                        ) : (
                          <p>Aun no tiene turnos</p>
                        )}
                      </h3>
                    </div>
                    <Link to={"/ver-turnos/"+proID}>Ver turnos</Link>
                  </div>
                </div>
                <div className="container__dashboard-container_card">
                  <div className="container__dashboard-container_card-content">
                    <div>
                      <p>Proxima consulta con</p>
                      <h3>
                        {proximoTurno.paciente
                          ? proximoTurno.paciente
                          : "Aun no tiene turnos"}
                      </h3>
                    </div>
                    {proximoTurno.id_paciente ? (
                      <Link
                        to={"/perfil/pacientes/" + proximoTurno.id_paciente}
                      >
                        Ver paciente
                      </Link>
                    ) : (
                      <Link to={"/pacientes"}>Ver pacientes</Link>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <></>
      )}

      <div>
        <Footer />
      </div>
    </>
  );
}

export default Dashboard;
