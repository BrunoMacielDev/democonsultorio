// ONLY PRO

import { useState, useEffect } from "react";
import { useToast } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import * as API from "../../../services/services";

function AntecedentesPer() {
  const toast = useToast();
  const { id_paciente } = useParams();
  const [paciente, setPaciente] = useState("");
  const [habitos, setHabitos] = useState("");
  const [cigarrillo, setCigarrillo] = useState("");
  const [drogas, setDrogas] = useState("");
  const [adicional, setAdicional] = useState("");

  useEffect(() => {
    trae_datos(id_paciente);
  }, []);

  const trae_datos = async () => {
    const datos_ap = await API.getAnPersonalesById(id_paciente);
    setPaciente(datos_ap.paciente);
    setHabitos(datos_ap.habitos);
    setCigarrillo(datos_ap.cigarrillo);
    setDrogas(datos_ap.drogas);
    setAdicional(datos_ap.adicional);
  };

  const handleSubmit = async () => {
    const datos_enviar = {
      habitos: habitos,
      cigarrillo: cigarrillo,
      drogas:drogas,
      adicional:adicional
    };
    const response = await API.UpdateAnPersonales(id_paciente, datos_enviar);
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
      <div className="container__ap-card_column">
        <h1>Paciente: {paciente}</h1>
        <form>
          <div className="form-item">
            <p>Habitos</p>
            <input
              type="text"
              className="form-element"
              placeholder="Sin completar"
              value={habitos}
              onChange={(event) => setHabitos(event.target.value)}
            />
          </div>
          <div className="form-item">
            <p>Cigarrillo</p>
            <input
              type="text"
              className="form-element"
              placeholder="Sin completar"
              value={cigarrillo}
              onChange={(event) => setCigarrillo(event.target.value)}
            />
          </div>
          <div className="form-item">
            <p>Drogas</p>
            <input
              type="text"
              className="form-element"
              placeholder="Sin completar"
              value={drogas}
              onChange={(event) => setDrogas(event.target.value)}
            />
          </div>
          <div className="form-item">
            <p>Adicional</p>
            <input
              type="text"
              className="form-element"
              placeholder="Sin completar"
              value={adicional}
              onChange={(event) => setAdicional(event.target.value)}
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

export default AntecedentesPer;
