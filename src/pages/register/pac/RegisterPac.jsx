import "./registerPac.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import * as API from "../../../services/services";
import { useToast } from "@chakra-ui/react";

const RegisterPac = () => {
  const toast = useToast();
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [telefono_movil, setTelefono_movil] = useState("");
  const [dni, setDni] = useState("");
  const [fecha_nacimiento, setFecha_nacimiento] = useState("");
  const [sexo, setSexo] = useState("");
  const [cobertura_medica, setCobertura_medica] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const datos_enviar = {
      nombre,
      apellido,
      email,
      password,
      telefono_movil,
      dni,
      fecha_nacimiento,
      sexo,
      cobertura_medica,
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
      const user = await API.RegisterPac(datos_enviar);
      if (user.status) {
        toast({
          title: user.message,
          status: "success",
          isClosable: true,
        });
        setTimeout(() => {
          window.location.replace(`/login/pacientes`);
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
    <div className="gradient__bg container__registerPac">
      <div className="container__registerPac-card">
        <div className="container__registerPac-card_column">
          <h2>¿Ya estas registrado?</h2>
          <p>Si ya tienes una cuenta, inicia sesion aqui.</p>
          <Link to="/login/pacientes">Iniciar sesion</Link>
        </div>
        <div className="container__registerPac-card_column">
          <h1>Registro pacientes</h1>
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
              <input
                type="text"
                className="form-element"
                placeholder="Telefono movil"
                name="telefono_movil"
                onChange={(e) => setTelefono_movil(e.target.value)}
                value={telefono_movil}
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
            <div className="form-item">
              <p>Fecha de nacimiento</p>
              <input
                type="date"
                className="form-element"
                name="fecha_nacimiento"
                onChange={(e) => setFecha_nacimiento(e.target.value)}
                value={fecha_nacimiento}
              />
            </div>
            <div className="form-item">
              <p>Cobertura medica</p>
              <select
                name="cobertura_medica"
                className="form-element"
                onChange={(e) => setCobertura_medica(e.target.value)}
                value={cobertura_medica}
              >
                <option value="" defaultValue={""}>
                  --Elegir una opcion--
                </option>
                <option value="Particular">Particular</option>
                <option value="IOSCOR">IOSCOR</option>
                <option value="Medife">Medife</option>
                <option value="OSDE">OSDE</option>
                <option value="Galeno">Galeno</option>
                <option value="Avalian">Avalian</option>
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

export default RegisterPac;
