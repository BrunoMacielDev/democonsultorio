// ONLY PRO
// ONLY PAC

import React from "react";
import './notFound.css'
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="gradient__bg container__notFound">
      <div className="container__notFound-card">
        <div className="container__notFound-card_column">
          <h2>Pagina no encontrada</h2>
          <p>Prueba ir por aqui:</p>
          <Link to="/">Inicio</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
