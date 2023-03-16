import React, { useState, useEffect } from "react";
import { HiXMark, HiOutlineBars3BottomRight, HiUser } from "react-icons/hi2";
import "./navbar.css";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [profesional, setProfesional] = useState("");
  const [proID, setProID] = useState("");
  const [pacID, setPacID] = useState("");
  const [paciente, setPaciente] = useState("");

  useEffect(() => {
    const profesionalLogueado = JSON.parse(localStorage.getItem("profesional"));
    if (profesionalLogueado) {
      setProID(profesionalLogueado.data[0].id_pro);
      setProfesional(profesionalLogueado);
    }
  }, []);
  useEffect(() => {
    const pacienteLogueado = JSON.parse(localStorage.getItem("paciente"));
    if (pacienteLogueado) {
      setPacID(pacienteLogueado.data[0].id_paciente);
      setPaciente(pacienteLogueado);
    }
  }, []);

  const logout = async (e) => {
    setProfesional("");
    setPaciente("");
    window.localStorage.removeItem("profesional");
    window.localStorage.removeItem("paciente");
    window.location.replace("/");
  };

  return (
    <div className="consultorio__navbar">
      <div className="consultorio__navbar-links_logo">
        <Link to={"/"}>
          <img src={logo} alt="logo" />
        </Link>
      </div>

      {!profesional && !paciente ? (
        <>
          <div className="consultorio__navbar-sign">
            <button type="button">
              <Link to={"/login"}>Ingresar</Link>
            </button>
          </div>
        </>
      ) : (
        <></>
      )}

      {!profesional ? (
        <></>
      ) : (
        <>
          <div className="consultorio__navbar-links">
            <div className="consultorio__navbar-links_container">
              <p>
                <Link to={"/dashboard/"+proID}>Dashboard</Link>
              </p>
              <p>
                <Link to={"/pacientes"}>Pacientes</Link>
              </p>
              <p>
                <Link to={"/ver-turnos/" + proID}>Turnos</Link>
              </p>
            </div>
          </div>
          <div className="consultorio__navbar-sign">
            <HiUser color="white" size={27} />
            <Link to={"/perfil/profesional/" + proID}>
              <p> Hola! {profesional.data[0].nombre}</p>
            </Link>

            <button onClick={logout} type="button">
              Salir
            </button>
          </div>
        </>
      )}

      {!paciente ? (
        <></>
      ) : (
        <>
          <div className="consultorio__navbar-links">
            <div className="consultorio__navbar-links_container">
              <p>
                <Link to={"/dashboard/"+pacID}>Dashboard</Link>
              </p>
              <p>
                <Link to={"/profesionales"}>Profesionales</Link>
              </p>
              <p>
                <Link to={"/solicitar-turno"}>Turnos</Link>
              </p>
            </div>
          </div>
          <div className="consultorio__navbar-sign">
            <HiUser color="white" size={27} />
            <Link to={"/perfil/pacientes/" + pacID}>
              <p>Hola! {paciente.data[0].nombre}</p>
            </Link>
            <button onClick={logout} type="button">
              Salir
            </button>
          </div>
        </>
      )}

      <div className="consultorio__navbar-menu">
        {toggleMenu ? (
          <HiXMark
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <HiOutlineBars3BottomRight
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}

        {toggleMenu && (
          <div className="consultorio__navbar-menu_container scale-up-center">
            <div className="consultorio_navbar-menu_container-links">
              {!profesional && !paciente ? (
                <>
                  <div className="consultorio__navbar-menu_container-links-sign">
                    <button type="button">
                      <Link to={"/login"}>Ingresar</Link>
                    </button>
                  </div>
                </>
              ) : (
                <></>
              )}

              {!profesional ? (
                <></>
              ) : (
                <>
                  <p>
                  <Link to={"/dashboard/"+proID}>Dashboard</Link>
                  </p>
                  <p>
                    <Link to={"/pacientes"}>Pacientes</Link>
                  </p>
                  <p>
                    <Link to={"/ver-turnos/" + proID}>turnos</Link>
                  </p>
                  <button onClick={logout} type="button">
                    Salir
                  </button>
                </>
              )}

              {!paciente ? (
                <></>
              ) : (
                <>
                  <p>
                  <Link to={"/dashboard/"+pacID}>Dashboard</Link>
                  </p>
                  <p>
                    <Link to={"/profesionales"}>Profesionales</Link>
                  </p>
                  <p>
                    <Link to={"/solicitar-turno"}>turnos</Link>
                  </p>
                  <button onClick={logout} type="button">
                    Salir
                  </button>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
