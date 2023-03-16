// ONLY PRO

import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Navbar from "../../../components/navbar/Navbar";
import { useToast } from "@chakra-ui/react";
import Footer from "../../../containers/footer/Footer";
import "./perfilPro.css";
import * as API from "../../../services/services.js";

function PerfilPro() {
  const toast = useToast();
  const { id_pro } = useParams();
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [email, setEmail] = useState("");
  const [area, setArea] = useState("");
  const [matricula, setMatricula] = useState("");
  const [dni, setDni] = useState("");
  const [sexo, setSexo] = useState("");

  useEffect(() => {
    trae_datos(id_pro);
  }, []);

  const trae_datos = async () => {
    const datos_pro = await API.getPerfilPro(id_pro);
    setNombre(datos_pro.nombre);
    setApellido(datos_pro.apellido);
    setEmail(datos_pro.email);
    setArea(datos_pro.area);
    setMatricula(datos_pro.matricula);
    setDni(datos_pro.dni);
    setSexo(datos_pro.sexo);
  };

  const handleSubmit = async () => {
    const datos_enviar = {
      nombre: nombre,
      apellido: apellido,
      email: email,
      area: area,
      matricula: matricula,
      dni: dni,
      sexo: sexo,
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
      const response = await API.UpdateProfesional(id_pro, datos_enviar);
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
    } else {
      toast({
        title: "Email no valido",
        status: "error",
        isClosable: true,
      });
    }
  };

  return (
    <>
      <div className="gradient__bg">
        <Navbar />
      </div>
      <div className="gradient__bg container__profilePro">
        <div className="container__profilePro-card">
          <div className="container__profilePro-card_column">
            <h1>
              Hola! {nombre} {apellido}
            </h1>
            <form>
              <div className="form-item">
                <p>Nombre</p>
                <input
                  type="text"
                  className="form-element"
                  placeholder="Nombre"
                  value={nombre}
                  onChange={(event) => setNombre(event.target.value)}
                />
              </div>
              <div className="form-item">
                <p>Apellido</p>
                <input
                  type="text"
                  className="form-element"
                  placeholder="Apellido"
                  value={apellido}
                  onChange={(event) => setApellido(event.target.value)}
                />
              </div>
              <div className="form-item">
                <p>Correo</p>
                <input
                  type="email"
                  className="form-element"
                  placeholder="Email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                />
              </div>
              <div className="form-item">
                <p>Area</p>
                <select
                  className="form-element"
                  value={area}
                  onChange={(event) => setArea(event.target.value)}
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
                <p>Matricula</p>
                <input
                  type="number"
                  className="form-element"
                  placeholder="Matricula"
                  value={matricula}
                  onChange={(event) => setMatricula(event.target.value)}
                />
              </div>
              <div className="form-item">
                <p>DNI</p>
                <input
                  type="text"
                  className="form-element"
                  placeholder="DNI"
                  value={dni}
                  onChange={(event) => setDni(event.target.value)}
                />
              </div>
              <div className="form-item">
                <p>Sexo</p>
                <select
                  className="form-element"
                  value={sexo}
                  onChange={(event) => setSexo(event.target.value)}
                >
                  <option value="" defaultValue={""}>
                    --Elegir una opcion
                  </option>
                  <option value="M">Masculino</option>
                  <option value="F">Femenino</option>
                </select>
              </div>
              <div className="flex">
                <button type="button">
                  <Link to={"/auth-password/profesionales/" + id_pro}>
                    Modificar contraseña
                  </Link>
                </button>
                <button type="button" onClick={handleSubmit}>
                  Guardar
                </button>
              </div>
              <div className="deleteAccount">
                <Link to={"/desactivar-cuenta/profesional/" + id_pro}>
                  Desactivar cuenta
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default PerfilPro;
