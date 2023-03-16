import { Link, useParams } from "react-router-dom";
import "./reset-password.css";
import { useToast } from "@chakra-ui/react";
import { useState } from "react";
import * as API from "../../services/services.js";

const AuthPasswordPac = () => {
  const { id_paciente } = useParams();
  const toast = useToast();
  const [password, setPassword] = useState("");

  const handleOnClick = async (e) => {
    e.preventDefault();
    const datos = {
      password: password,
    };
    if (password == "") {
      toast({
        title: "Por favor, ingrese su contraseña",
        status: "error",
        isClosable: true,
      });
    } else {
      const response = await API.AuthPasswordPac(id_paciente, datos);
        if (response.status) {
          window.location.replace(
            `/reset-password/paciente/${id_paciente}`
          );
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
          <h1>Modificar contraseña</h1>
          <p>Por favor, ingrese su contraseña actual.</p>
          <form>
            <div className="form-item">
              <input
                type="password"
                className="form-element"
                placeholder="Contraseña actual"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="flex">
              <button onClick={handleOnClick}>Continuar</button>
              <Link to={"/perfil/pacientes/" + id_paciente}>Volver</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AuthPasswordPac;
