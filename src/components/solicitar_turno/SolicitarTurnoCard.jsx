import { useState } from "react";
import * as API from "../../services/services";
import { useToast } from "@chakra-ui/react";
import "./sol-turno-card.css";

const SolicitarTurnoCard = ({ title, id_pro, pacID }) => {
  const toast = useToast();
  const [fecha, setFecha] = useState("");
  const [hora, setHora] = useState("");

  const handleOnView = async () => {
    const datos_enviar = {
      fecha: fecha,
      hora: hora,
    };
    const response = await API.viewTurno(id_pro, datos_enviar);
    if (fecha != "") {
      if (response.status) {
        toast({
          title: response.message,
          status: "success",
          isClosable: true,
        });
      } else {
        toast({
          title: response.message,
          status: "error",
          isClosable: true,
        });
      }
    } else {
      toast({
        title: "Seleccione una fecha",
        status: "error",
        isClosable: true,
      });
    }
  };

  const handleAltaTurno = async () => {
    const datos_enviar = {
      fecha: fecha,
      hora: hora,
      id_paciente: pacID,
    };
    const profesionalLogueado = JSON.parse(localStorage.getItem("profesional"));
    const pacienteLogeado = JSON.parse(localStorage.getItem("paciente"));
    if (profesionalLogueado) {
      const response = await API.AltaTurno(id_pro, datos_enviar);
      if (response.status) {
        toast({
          title: response.message,
          status: "success",
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
    if (pacienteLogeado) {
      const response = await API.pedirTurno(id_pro, datos_enviar);
      if (response.status) {
        toast({
          title: response.message,
          status: "success",
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
  return (
    <>
      <div className="container__solturno-card">
        <div className="container__solturno-card_column">
          <form>
            <h3>{title}</h3>
            <input
              type="date"
              className="form-element"
              value={fecha}
              onChange={(event) => setFecha(event.target.value)}
            />
            <input
              type="time"
              className="form-element"
              value={hora}
              onChange={(event) => setHora(event.target.value)}
            />
            <div className="container__solturno-card-btn">
              <button type="button" onClick={handleOnView}>
                Ver disponibilidad
              </button>
              <button type="button" onClick={handleAltaTurno}>
                Pedir Turno
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SolicitarTurnoCard;
