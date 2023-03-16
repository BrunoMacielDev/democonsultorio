// ONLY PRO

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useToast } from "@chakra-ui/react";
import "./habitosFisio.css";
import * as API from "../../../services/services.js";

function CreateHabitos() {
  const toast = useToast();
  const { id_paciente } = useParams();
  const [paciente, setPaciente] = useState("");
  const [alimentacion, setAlimentacion] = useState("");
  const [sueño, setSueño] = useState("");
  const [sexualidad, setSexualidad] = useState("");
  const [ejercicio, setEjercicio] = useState("");
  const [alergias, setAlergias] = useState("");

  useEffect(() => {
    handleDataIni(id_paciente);
  }, []);

  const handleDataIni = async () => {
    const datos_header = await API.getPacientesById(id_paciente);
    setPaciente(datos_header.paciente);
  };

  useEffect(() => {
    handleDataPac(id_paciente);
  }, []);

  const handleDataPac = async () => {
    const datos_hab = await API.getHabitosById(id_paciente);
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
    const response = await API.InsertHabitos(id_paciente, datos_enviar);
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
      <div className="container__perfilPro-card_column">
        <h1>Paciente: {paciente}</h1>
        <p style={{ color: "red" }}>Debe cargar los siguientes campos.</p>
        <form>
          <div className="form-item">
            <p>Alimentacion</p>
            <input
              type="text"
              className="form-element"
              placeholder="Sin completar"
              value={alimentacion}
              onChange={(event) => setAlimentacion(event.target.value)}
            />
          </div>
          <div className="form-item">
            <p>Sueño</p>
            <input
              type="text"
              className="form-element"
              placeholder="Sin completar"
              value={sueño}
              onChange={(event) => setSueño(event.target.value)}
            />
          </div>
          <div className="form-item">
            <p>Sexualidad</p>
            <input
              type="email"
              className="form-element"
              placeholder="Sin completar"
              value={sexualidad}
              onChange={(event) => setSexualidad(event.target.value)}
            />
          </div>
          <div className="form-item">
            <p>Ejercicio</p>
            <input
              type="email"
              className="form-element"
              placeholder="Sin completar"
              value={ejercicio}
              onChange={(event) => setEjercicio(event.target.value)}
            />
          </div>
          <div className="form-item">
            <p>Alergias</p>
            <input
              type="text"
              className="form-element"
              placeholder="Sin completar"
              value={alergias}
              onChange={(event) => setAlergias(event.target.value)}
            />
          </div>
          <div className="flex">
            <button type="button" onClick={handleSubmit}>
              Cargar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateHabitos;
