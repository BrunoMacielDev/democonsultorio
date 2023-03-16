// ONLY PRO
// ONLY PAC

import { useState } from "react";
import { Link } from "react-router-dom";
import "./loginPro.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import * as API from "../../../services/services";
import { useToast } from "@chakra-ui/react";

const LoginPro = () => {
  const toast = useToast();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userPro = await API.LoginProfesionales({ email, password });
    console.log(userPro)
    if (userPro.status) {
      window.localStorage.setItem("profesional", JSON.stringify(userPro));
      window.localStorage.setItem("token", JSON.stringify(userPro.token));
      setEmail("");
      setPassword("");
      window.location.replace(`/`);
    } else {      
      toast({
        title: userPro.message,
        status: "error",
        isClosable: true,
      });
    }
  };

  return (
    <div className="gradient__bg container__loginPro">
      <div className="container__loginPro-card">
        <div className="container__loginPro-card_column">
          <h1>Ingreso profesionales</h1>
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
              <Link to="/reset-password/profesionales">Olvide mi contraseña</Link>
            </div>
          </form>
        </div>
        <div className="container__loginPro-card_column">
          <h2>Bienvenido!</h2>
          <p>Si todavia no tienes cuenta, puedes registrarte</p>
          <Link to="/register-profesionales">Registro</Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPro;
