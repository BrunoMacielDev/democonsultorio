// ONLY PRO
// ONLY PAC

import React from "react";
import './login.css'
import "bootstrap-icons/font/bootstrap-icons.css";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="gradient__bg container__inter">
      <div className="container__inter-card">
        <div className="container__inter-card_column">
          <h2>Ingreso pacientes</h2>
          <p>Si sos paciente de la clinica, ingresa aqui.</p>
          <Link to="/login/pacientes">Ingreso pacientes</Link>
        </div>
        <div className="container__inter-card_column">
          <h2>Ingreso profesionales</h2>
          <p>Si trabajas con nosotros, ingresa aqui.</p>
          <Link to="/login/profesionales">Ingreso profesionales</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
