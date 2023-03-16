// ONLY PRO

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useToast } from "@chakra-ui/react";
import * as API from "../../../services/services";

function AntecedentesFam() {
  const toast = useToast();
  const { id_paciente } = useParams();
  const [paciente, setPaciente] = useState("");
  const [situacion_madre, setSituacion_madre] = useState("");
  const [situacion_padre, setSituacion_padre] = useState("");

  useEffect(() => {
    trae_datos(id_paciente);
  }, []);

  const trae_datos = async () => {
    const datos_af = await API.getAnFamiliaById(id_paciente);
    setPaciente(datos_af.paciente);
    setSituacion_madre(datos_af.situacion_madre);
    setSituacion_padre(datos_af.situacion_padre);
  };

  const handleSubmit = async () => {
    const datos_enviar = {
      situacion_madre: situacion_madre,
      situacion_padre: situacion_padre,
    };
    const response = await API.UpdateAnFamilia(id_paciente, datos_enviar);
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
      <div className="container__af-card_column">
        <h1>Paciente: {paciente}</h1>
        <form>
          <div className="form-item">
            <p>Situacion madre</p>
            <input
              type="text"
              className="form-element"
              placeholder="Sin completar"
              value={situacion_madre}
              onChange={(event) => setSituacion_madre(event.target.value)}
            />
          </div>
          <div className="form-item">
            <p>Situacion padre</p>
            <input
              type="text"
              className="form-element"
              placeholder="Sin completar"
              value={situacion_padre}
              onChange={(event) => setSituacion_padre(event.target.value)}
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

export default AntecedentesFam;
