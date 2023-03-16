// ONLY PRO

import { useState, useEffect } from "react";
import { useToast } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import * as API from "../../../services/services.js";

function CreateHistoria() {
  const toast = useToast();
  const { id_paciente } = useParams();
  const [paciente, setPaciente] = useState("");
  const [ocupacion, setOcupacion] = useState("");
  const [estado_civil, setEstado_civil] = useState("");
  const [pais_origen, setPais_origen] = useState("");
  const [direccion, setDireccion] = useState("");
  const [grado_instruccion, setGrado_instruccion] = useState("");
  const [motivo_ingreso, setMotivo_ingreso] = useState("");

  useEffect(() => {
    handleDataPac(id_paciente);
  }, []);

  useEffect(() => {
    handleDataIni(id_paciente);
  }, []);

  const handleDataIni = async () => {
    const datos_header = await API.getPacientesById(id_paciente);
    setPaciente(datos_header.paciente);
  };

  const handleDataPac = async () => {
    const datos_pac = await API.getHistoriaById(id_paciente);
    setOcupacion(datos_pac.ocupacion);
    setEstado_civil(datos_pac.estado_civil);
    setPais_origen(datos_pac.pais_origen);
    setDireccion(datos_pac.direccion);
    setGrado_instruccion(datos_pac.grado_instruccion);
    setMotivo_ingreso(datos_pac.motivo_ingreso);
  };

  const handleSubmit = async () => {
    const datos_enviar = {
      ocupacion,
      estado_civil,
      pais_origen,
      direccion,
      grado_instruccion,
      motivo_ingreso,
    };
    const response = await API.insertHistoriaById(id_paciente, datos_enviar);
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
    <>
      <div className="container__perfilPro-card_column">
        <h1>Paciente: {paciente}</h1>
        <p style={{ color: "red" }}>Debe cargar los siguientes campos.</p>
        <form>
          <div className="form-item">
            <p>Ocupacion</p>
            <input
              type="text"
              className="form-element"
              placeholder="Sin completar"
              value={ocupacion}
              onChange={(event) => setOcupacion(event.target.value)}
            />
          </div>
          <div className="form-item">
            <p>Estado Civil</p>
            <input
              type="text"
              className="form-element"
              placeholder="Sin completar"
              value={estado_civil}
              onChange={(event) => setEstado_civil(event.target.value)}
            />
          </div>
          <div className="form-item">
            <p>Pais origen</p>
            <input
              type="email"
              className="form-element"
              placeholder="Sin completar"
              value={pais_origen}
              onChange={(event) => setPais_origen(event.target.value)}
            />
          </div>

          <div className="form-item">
            <p>Direccion</p>
            <input
              type="text"
              className="form-element"
              placeholder="Sin completar"
              value={direccion}
              onChange={(event) => setDireccion(event.target.value)}
            />
          </div>
          <div className="form-item">
            <p>Grado de instruccion</p>
            <input
              type="text"
              className="form-element"
              placeholder="Sin completar"
              value={grado_instruccion}
              motivo_ingreso
              onChange={(event) => setGrado_instruccion(event.target.value)}
            />
          </div>
          <div className="form-item">
            <p>Motivo ingreso</p>
            <input
              type="text"
              className="form-element"
              placeholder="Sin completar"
              value={motivo_ingreso}
              onChange={(event) => setMotivo_ingreso(event.target.value)}
            />
          </div>

          <div className="flex">
            <button type="button" onClick={handleSubmit}>
              Cargar
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default CreateHistoria;
