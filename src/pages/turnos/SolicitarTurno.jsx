import { useEffect, useState } from "react";
import Footer from "../../containers/footer/Footer";
import { SolicitarTurnoCard, Navbar } from "../../components/index";
import * as API from "../../services/services";
import { useToast } from "@chakra-ui/react";
import { MdLoop } from "react-icons/md";
import moment from "moment";
import "./turnos.css";
import { IoCloseCircleOutline } from "react-icons/io5";

function SolicitarTurno() {
  const [pacID, setPacID] = useState("");
  const toast = useToast();
  const [area, setArea] = useState("");
  const [profesionales, setProfesionales] = useState([]);
  const [profesional, setProfesional] = useState("");
  const [turnos, setTurnos] = useState([]);

  useEffect(() => {
    const pacienteLogueado = JSON.parse(localStorage.getItem("paciente"));
    if (pacienteLogueado) {
      setPacID(pacienteLogueado.data[0].id_paciente);
    }
  }, []);

  useEffect(() => {
    handleHistorialTurnos(pacID);
  }, []);

  const handleHistorialTurnos = async () => {
    const pacienteLogueado = JSON.parse(localStorage.getItem("paciente"));
    const response = await API.getTurnosByPac(
      pacienteLogueado.data[0].id_paciente
    );
    if (response.status) {
      setTurnos(response.datos);
    } else {
      toast({
        title: "No se encontraron registros",
        status: "error",
        isClosable: true,
      });
    }
  };

  const handleCancel = async (turnoID) => {
    const profesionalLogueado = JSON.parse(localStorage.getItem("profesional"));
    const pacienteLogueado = JSON.parse(localStorage.getItem("paciente"));
    if (profesionalLogueado) {
      const response = await API.bajaTurnoById(turnoID);
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
    }
    if (pacienteLogueado) {
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
    }
  };

  const handleSearchPro = async () => {
    const datos = {
      area: area,
    };
    const response = await API.getProfesionalesByArea(datos);
    if (response.status) {
      setProfesionales(response.data);
    } else {
      toast({
        title: "No se encontraron profesionales en esta area",
        status: "error",
        isClosable: true,
      });
    }
  };

  const handleCleanFilter = async () => {
    setArea("");
    setProfesionales([]);
    setProfesional("");
  };

  return (
    <>
      <div className="gradient__bg">
        <Navbar />
      </div>
      <div className="gradient__bg">
        <div className="solicitar-turno_heading">
          <h1 className="gradient__text">Solicitar turno</h1>
        </div>
        <div className="asignar-turno">
          <div className="container__solturno-card">
            <div className="container__solturno-card_column">
              <form>
                <h3>Seleccione profesional</h3>
                <select
                  name="area"
                  className="form-element"
                  onChange={(e) => setArea(e.target.value)}
                  value={area}
                >
                  <option value="" defaultValue={""}>
                    --Elegir area medica
                  </option>
                  <option value="Ginecologia">Ginecologia</option>
                  <option value="Cardiologia">Cardiologia</option>
                  <option value="Gastroenterologia">Gastroenterologia</option>
                  <option value="Dermatologia">Dermatologia</option>
                  <option value="Traumatologia">Traumatologia</option>
                  <option value="Pediatria">Pediatria</option>
                </select>
                <select
                  name="area"
                  className="form-element"
                  onChange={(e) => setProfesional(e.target.value)}
                  value={profesional}
                >
                  <option value="" defaultValue={""}>
                    --Elegir profesional
                  </option>
                  {profesionales.map((item, index) => (
                    <option key={index} value={item.id_pro}>
                      {item.nombre} {item.apellido} ({item.matricula})
                    </option>
                  ))}
                </select>
                <div className="container__solturno-card-btn">
                  <button type="button" onClick={handleSearchPro}>
                    Buscar
                  </button>
                  <button type="button" onClick={handleCleanFilter}>
                    Limpiar
                  </button>
                </div>
              </form>
            </div>
            {profesional ? (
              <div className="asignar-turno">
                <SolicitarTurnoCard
                  title={"Solicitar Turno"}
                  id_pro={profesional}
                  pacID={pacID}
                />
              </div>
            ) : (
              <></>
            )}
          </div>
        </div>

        <div className="list_turnos">
          <div className="list-header">
            <h2>Historial de turnos</h2>
            <MdLoop onClick={handleHistorialTurnos} />
          </div>
          <table>
            <thead>
              <tr>
                <th>Profesional</th>
                <th>Fecha</th>
                <th>Hora</th>
                <th>Estado</th>
                <th>Acciones</th>
                <th>&nbsp;</th>
                <th>&nbsp;</th>
              </tr>
            </thead>
            <tbody>
              {turnos.map((item, index) => (
                <tr key={index}>
                  <td>{item.profesional}</td>
                  <td>{moment(item.fecha).format("YYYY-MM-DD")}</td>
                  <td>{item.hora}</td>
                  <td>{item.estado}</td>
                  <td>
                    {item.estado == "Activo" ? (
                      <div className="turnos__actions">
                        <button
                          type="button"
                          className="cross"
                          onClick={() => handleCancel(item.id_turno)}
                        >
                          <IoCloseCircleOutline />
                        </button>
                      </div>
                    ) : (
                      ""
                    )}
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

export default SolicitarTurno;
