// ONLY PRO
// ONLY PAC

import { useState } from "react";
import { Link } from "react-router-dom";
import "./loginPac.css";
import * as API from "../../../services/services";
import { useToast } from "@chakra-ui/react";
import { IoArrowBackCircleOutline } from "react-icons/io5";

const LoginPac = () => {
  const toast = useToast();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userPac = await API.LoginPacientes({ email, password });
    if (userPac.status) {
      window.localStorage.setItem("paciente", JSON.stringify(userPac));
      window.localStorage.setItem("token", JSON.stringify(userPac.token));
      setEmail("");
      setPassword("");
      window.location.replace("/");
    } else {
      toast({
        title: userPac.message,
        status: "error",
        isClosable: true,
      });
    }
  };

  return (
    <div className="gradient__bg container__loginPac">
      <div className="container__loginPac-card">
        <div className="container__loginPac-card_column">
          <h1>Ingreso pacientes</h1>
          <p>Por favor, ingrese sus datos.</p>
          <form onSubmit={handleSubmit}>
            <div className="form-item">
              <input
                type="text"
                className="form-element"
                placeholder="Email"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
            </div>
            <div className="form-item">
              <input
                type="password"
                className="form-element"
                placeholder="Contraseña"
                name="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
            </div>
            {/* <div className="form-checkbox-item">
              <input type="checkbox" id="rememberMe" />
              <label htmlFor="rememberMe">Recordarme</label>
            </div> */}
            <div className="flex">
              <button type="submit">Iniciar sesión</button>
              <Link to="/reset-password/pacientes">Olvide mi contraseña</Link>
            </div>
          </form>
        </div>
        <div className="container__loginPac-card_column">
          <h2>Bienvenido!</h2>
          <p>Si todavia no tienes cuenta, puedes registrarte</p>
          <Link to="/register-pacientes">Registro</Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPac;
