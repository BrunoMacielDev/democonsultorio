// ONLY PRO

import { useState, useEffect } from "react";
import { useToast } from "@chakra-ui/react";
import { Link, useParams } from "react-router-dom";
import * as API from "../../services/services";

function DatosPac() {
  const toast = useToast();
  const { id_paciente } = useParams();
  const [paciente, setPaciente] = useState("");
  const [pacienteLog, setPacienteLog] = useState("");
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [email, setEmail] = useState("");
  const [telefono_movil, setTelefono_movil] = useState("");
  const [dni, setDni] = useState("");
  const [fecha_nacimiento, setFecha_nacimiento] = useState("");
  const [sexo, setSexo] = useState("");
  const [cobertura_medica, setCobertura_medica] = useState("");

  useEffect(() => {
    trae_datos(id_paciente);
  }, []);

  useEffect(() => {
    const pacienteLogueado = JSON.parse(localStorage.getItem("paciente"));
    if (pacienteLogueado) {
      setPacienteLog(pacienteLogueado);
    }
  }, []);

  const trae_datos = async () => {
    const datos_pac = await API.getPacientesById(id_paciente);
    setPaciente(datos_pac.paciente);
    setNombre(datos_pac.nombre);
    setApellido(datos_pac.apellido);
    setEmail(datos_pac.email);
    setTelefono_movil(datos_pac.telefono_movil);
    setDni(datos_pac.dni);
    setFecha_nacimiento(datos_pac.fecha_formateada);
    setSexo(datos_pac.sexo);
    setCobertura_medica(datos_pac.cobertura_medica);
  };

  const handleSubmit = async () => {
    const datos_enviar = {
      nombre: nombre,
      apellido: apellido,
      email: email,
      telefono_movil: telefono_movil,
      dni: dni,
      fecha_nacimiento: fecha_nacimiento,
      sexo: sexo,
      cobertura_medica: cobertura_medica,
    };
    const response = await API.UpdatePaciente(id_paciente, datos_enviar);
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
  };

  return (
    <>
      <div>
        <h1>Paciente: {paciente}</h1>
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
            <p>Telefono Movil</p>
            <input
              type="text"
              className="form-element"
              placeholder="Telefono Movil"
              value={telefono_movil}
              onChange={(event) => setTelefono_movil(event.target.value)}
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
            <p>Fecha de nacimiento</p>
            <input
              type="date"
              className="form-element"
              placeholder="Fecha de nacimiento"
              value={fecha_nacimiento}
              onChange={(event) => setFecha_nacimiento(event.target.value)}
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

          <div className="form-item">
            <p>Cobertura medica</p>
            <select
              className="form-element"
              value={cobertura_medica}
              onChange={(event) => setCobertura_medica(event.target.value)}
            >
              <option value="" defaultValue={""}>
                --Elegir una opcion
              </option>
              <option value="Particular">Particular</option>
              <option value="Medife">Medife</option>
              <option value="IOSCOR">IOSCOR</option>
              <option value="OSDE">OSDE</option>
              <option value="Galeno">Galeno</option>
              <option value="Avalian">Avalian</option>
              <option value="Swiss Medical">Swiss Medical</option>
            </select>
          </div>

          <div className="flex">
            {!pacienteLog ? (
              <></>
            ) : (
              <button type="button">
                <Link to={"/reset-password/paciente/" + id_paciente}>
                  Modificar contraseña
                </Link>
              </button>
            )}

            <button type="button" onClick={handleSubmit}>
              Guardar
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default DatosPac;
