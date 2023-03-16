import { Link, useParams } from "react-router-dom";
import "./reset-password.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useState, useEffect } from "react";
import { useToast } from "@chakra-ui/react";
import * as API from "../../services/services.js";

const ResetPac = () => {
  const toast = useToast();
  const { id_paciente } = useParams();
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const [paciente, setPaciente] = useState("");

  useEffect(() => {
    const pacienteLogueado = JSON.parse(localStorage.getItem("paciente"));
    if (pacienteLogueado) {
      setPaciente(pacienteLogueado);
    }
  }, []);

  useEffect(() => {
    trae_datos(id_paciente);
  }, []);

  const trae_datos = async () => {
    const response = await API.getEmailPacById(id_paciente);
    setEmail(response.email);
  };

  const handleSubmit = async () => {
    const datos_enviar = {
      password: password,
    };
    if (!password) {
      toast({
        title: "Por favor, ingrese una contraseña",
        status: "error",
        isClosable: true,
      });
    } else {
      const response = await API.ResetPac(id_paciente, datos_enviar);
      if (response.status) {
        toast({
          title: response.message,
          status: "success",
          isClosable: true,
        });
        setTimeout(() => {
          window.location.replace(`/login/pacientes`);
        }, 2000);
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
    <div className="gradient__bg container__resetPro">
      <div className="container__resetPro-card">
        <div className="container__resetPro-card_column">
          <h1>Restaurar contraseña</h1>
          <p>Por favor, complete los siguientes campos.</p>
          <form>
            <p>Email: {email}</p>
            <div className="form-item">
              <input
                type="password"
                className="form-element"
                placeholder="Contraseña"
                name="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
            </div>
            <div className="flex">
              <button type="button" onClick={handleSubmit}>
                Restaurar
              </button>
              {!paciente ? (
                <Link to="/login/pacientes">Volver al login</Link>
              ) : (
                <Link to={"/perfil/pacientes/" + id_paciente}>Volver</Link>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ResetPac;
