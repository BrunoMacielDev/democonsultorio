// ONLY PRO

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useToast } from "@chakra-ui/react";
import * as API from "../../../services/services.js";

function HabitosFisio() {
  const toast = useToast();
  const { id_paciente } = useParams();
  const [paciente, setPaciente] = useState("");
  const [alimentacion, setAlimentacion] = useState("");
  const [sueño, setSueño] = useState("");
  const [sexualidad, setSexualidad] = useState("");
  const [ejercicio, setEjercicio] = useState("");
  const [alergias, setAlergias] = useState("");

  useEffect(() => {
    trae_datos(id_paciente);
  }, []);

  const trae_datos = async () => {
    const datos_hab = await API.getHabitosById(id_paciente);
    setPaciente(datos_hab.paciente);
    setAlimentacion(datos_hab.alimentacion);
    setSueño(datos_hab.sueño);
    setSexualidad(datos_hab.sexualidad);
    setEjercicio(datos_hab.ejercicio);
    setAlergias(datos_hab.alergias);
  };

  const handleSubmit = async () => {
    const datos_enviar = {
      paciente: paciente,
      alimentacion: alimentacion,
      sueño: sueño,
      sexualidad: sexualidad,
      ejercicio: ejercicio,
      alergias: alergias,
    };
    const response = await API.UpdateHabitosFisio(id_paciente, datos_enviar);
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
  };

  return (
    <div>
      <div>
      <h1>Paciente: {paciente}</h1>
        <form>
          <div className="form-item">
            <p>Alimentacion</p>
            <input
              type="text"
              className="form-element"
              placeholder="Alimentacion"
              value={alimentacion}
              onChange={(event) => setAlimentacion(event.target.value)}
            />
          </div>
          <div className="form-item">
            <p>Sueño</p>
            <input
              type="text"
              className="form-element"
              placeholder="Sueño"
              value={sueño}
              onChange={(event) => setSueño(event.target.value)}
            />
          </div>
          <div className="form-item">
            <p>Sexualidad</p>
            <input
              type="email"
              className="form-element"
              placeholder="sexualidad"
              value={sexualidad}
              onChange={(event) => setSexualidad(event.target.value)}
            />
          </div>
          <div className="form-item">
            <p>Ejercicio</p>
            <input
              type="email"
              className="form-element"
              placeholder="ejercicio"
              value={ejercicio}
              onChange={(event) => setEjercicio(event.target.value)}
            />
          </div>
          <div className="form-item">
            <p>Alergias</p>
            <input
              type="text"
              className="form-element"
              placeholder="alergias"
              value={alergias}
              onChange={(event) => setAlergias(event.target.value)}
            />
          </div>

          <div className="flex">
            <button type="button" onClick={handleSubmit}>
              Guardar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default HabitosFisio;
