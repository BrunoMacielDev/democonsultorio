import { Link } from "react-router-dom";
import "./reset-password.css";
import { useToast } from "@chakra-ui/react";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useState } from "react";
import * as API from "../../services/services.js";

const InterResetPac = () => {
  const toast = useToast();
  const [email, setEmail] = useState("");

  const handleOnClick = async (e) => {
    e.preventDefault();
    if (email) {
      const response = await API.getPacientesByEmail({ email });
      if (response.status) {
        window.location.replace(
          `/reset-password/paciente/${response.data[0].id_paciente}`
        );
      } else {
        toast({
          title: response.message,
          status: "error",
          isClosable: true,
        });
      }
    } else {
      toast({
        title: "Por favor, ingrese un email",
        status: "error",
        isClosable: true,
      });
    }
  };

  return (
    <div className="gradient__bg container__resetPro">
      <div className="container__resetPro-card">
        <div className="container__resetPro-card_column">
          <h1>¿Olvido su contraseña?</h1>
          <p>Por favor, ingrese el email con el que se registro.</p>
          <form>
            <div className="form-item">
              <input
                type="text"
                className="form-element"
                placeholder="Email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="flex">
              <button onClick={handleOnClick}>Continuar</button>
              <Link to="/login/pacientes">Volver al login</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default InterResetPac;
