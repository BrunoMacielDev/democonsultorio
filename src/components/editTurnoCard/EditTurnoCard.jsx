import { useState, useEffect } from "react";
import { useToast } from "@chakra-ui/react";
import * as API from "../../services/services";
import "./editTurnoCard.css";
import moment from "moment";

function EditTurnoCard({ id_turno, id_pro }) {
  const toast = useToast();
  const [turnos, setTurnos] = useState([]);
  const [fecha, setFecha] = useState("");
  const [hora, setHora] = useState("");
  var dateDisplay = moment().format("YYYY-MM-DD");

  useEffect(() => {
    API.getTurnosById(id_turno).then(setTurnos);
  }, []);

  const handleOnView = async () => {
    const datos_enviar = {
      fecha: fecha,
      hora: hora,
    };

    if (fecha != "") {
      if (fecha >= dateDisplay) {
        if (hora != "") {
          const response = await API.viewTurno(id_pro, datos_enviar);
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
            title: "Seleccione un horario",
            status: "error",
            isClosable: true,
          });
        }
      } else {
        toast({
          title: "Fuera de fecha",
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

  const handleEdit = async () => {
    const datos_enviar = {
      fecha: fecha,
      hora: hora,
    };
    if (fecha != "") {
      if (fecha >= dateDisplay) {
        if (hora != "") {
          const response = await API.editTurno(id_turno, datos_enviar);
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
            title: "Seleccione un horario",
            status: "error",
            isClosable: true,
          });
        }
      } else {
        toast({
          title: "Fuera de fecha",
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

  return (
    <>
      <div className="container__editTurno-card">
        <div className="container__editTurno-card_column">
          <form>
            <p>Fecha actual: {moment(turnos.fecha).format("YYYY-MM-DD")} </p>
            <input
              type="date"
              className="form-element"
              value={fecha}
              onChange={(event) => setFecha(event.target.value)}
            />
            <p>Hora actual: {moment(turnos.hora, "hh:mm").format("HH:mm")}</p>
            <input
              type="time"
              className="form-element"
              value={hora}
              onChange={(event) => setHora(event.target.value)}
            />
            <div className="container__editTurno-card-btn">
              <button type="button" onClick={handleOnView}>
                Ver disponibilidad
              </button>
              <button type="button" onClick={handleEdit}>
                Editar
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default EditTurnoCard;
