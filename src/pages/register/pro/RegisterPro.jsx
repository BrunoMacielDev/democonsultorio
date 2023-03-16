import "./registerPro.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import * as API from "../../../services/services";
import { useToast } from "@chakra-ui/react";
import axios from "axios";

const RegisterPro = () => {
  const toast = useToast();
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [area, setArea] = useState("");
  const [matricula, setMatricula] = useState("");
  const [dni, setDni] = useState("");
  const [sexo, setSexo] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const datos_enviar = {
      nombre,
      apellido,
      email,
      password,
      area,
      matricula,
      dni,
      sexo,
    };
    const isValidEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    function validateEmail(e) {
      if (e.match(isValidEmail)) {
        return true;
      } else {
        return false;
      }
    }

    if (validateEmail(email)) {
      const user = await API.RegisterPro(datos_enviar);
      if (user.status) {
        toast({
          title: user.message,
          status: "success",
          isClosable: true,
        });
        setTimeout(() => {
          window.location.replace(`/login/profesionales`);
        }, 2000);
      } else {
        toast({
          title: user.message,
          status: "error",
          isClosable: true,
        });
      }
    } else {
      toast({
        title: "Email no valido",
        status: "error",
        isClosable: true,
      });
    }
  };

  return (
    <div className="gradient__bg container__registerPro">
      <div className="container__registerPro-card">
        <div className="container__registerPro-card_column">
          <h2>¿Ya estas registrado?</h2>
          <p>Si ya tienes una cuenta, inicia sesion aqui.</p>
          <Link to="/login/profesionales">Iniciar sesion</Link>
        </div>
        <div className="container__registerPro-card_column">
          <h1>Registro profesionales</h1>
          <p>Por favor, complete los siguientes campos.</p>
          <form onSubmit={handleSubmit}>
            <div className="form-item">
              <input
                type="text"
                className="form-element"
                placeholder="Nombre"
                name="nombre"
                onChange={(e) => setNombre(e.target.value)}
                value={nombre}
              />
            </div>
            <div className="form-item">
              <input
                type="text"
                className="form-element"
                placeholder="Apellido"
                name="apellido"
                onChange={(e) => setApellido(e.target.value)}
                value={apellido}
              />
            </div>
            <div className="form-item">
              <input
                type="text"
                className="form-element"
                placeholder="Email"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                required
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
                required
              />
            </div>
            <div className="form-item">
              <p>Area</p>
              <select
                name="area"
                className="form-element"
                onChange={(e) => setArea(e.target.value)}
                value={area}
              >
                <option value="" defaultValue={""}>
                  --Elegir una opcion
                </option>
                <option value="Ginecologia">Ginecologia</option>
                <option value="Cardiologia">Cardiologia</option>
                <option value="Gastroenterologia">Gastroenterologia</option>
                <option value="Dermatologia">Dermatologia</option>
                <option value="Traumatologia">Traumatologia</option>
                <option value="Pediatria">Pediatria</option>
              </select>
            </div>
            <div className="form-item">
              <input
                type="text"
                className="form-element"
                placeholder="Matricula"
                name="matricula"
                onChange={(e) => setMatricula(e.target.value)}
                value={matricula}
                required
              />
            </div>
            <div className="form-item">
              <input
                type="text"
                className="form-element"
                placeholder="DNI"
                name="dni"
                onChange={(e) => setDni(e.target.value)}
                value={dni}
                required
              />
            </div>
            <div className="form-item">
              <p>Sexo</p>
              <select
                name="sexo"
                className="form-element"
                onChange={(e) => setSexo(e.target.value)}
                value={sexo}
              >
                <option value="" defaultValue={""}>
                  --Elegir una opcion
                </option>
                <option value="M">Masculino</option>
                <option value="F">Femenino</option>
              </select>
            </div>
            <div className="form-checkbox-item">
              <input type="checkbox" id="terms" required />
              <label htmlFor="terms">Acepto los terminos y condiciones.</label>
            </div>
            <div className="flex">
              <button type="submit">Registrarse</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterPro;
