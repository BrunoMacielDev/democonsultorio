import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import {
  LoginPro,
  LoginPac,
  RegisterPro,
  RegisterPac,
  Home,
  Login,
  HistoriaClinica,
  AntecedentesFam,
  AntecedentesPer,
  HabitosFisio,
  VerTurnos,
  PerfilPro,
  ListPacientes,
  HCPaciente,
  PerfilPac,
  CreateHistoria,
  Profesionales,
  SolicitarTurno,
  ResetPro,
  ResetPac,
  InterResetPro,
  InterResetPac,
  VerPerfilPro,
  GestionarTurno,
  VerPerfilPac,
  DeleteProAccount,
  DeletePacAccount,
  AuthPasswordPro,
  AuthPasswordPac,
  Dashboard,
  NotFound
} from "./pages/index";

function App() {
  const [profesional, setProfesional] = useState("");
  const [proID, setProID] = useState("");
  const [paciente, setPaciente] = useState("");

  useEffect(() => {
    const profesionalLogueado = JSON.parse(localStorage.getItem("profesional"));
    if (profesionalLogueado) {
      setProfesional(profesionalLogueado);
      setProID(profesionalLogueado.data[0].id_pro);
    }
  }, []);

  useEffect(() => {
    const pacienteLogueado = JSON.parse(localStorage.getItem("paciente"));
    if (pacienteLogueado) {
      setPaciente(pacienteLogueado);
    }
  }, []);

  return (
    <>
      {!profesional && !paciente ? (
        <>
          <Routes>
            <Route path="*" element={<NotFound/>}/>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/login/profesionales" element={<LoginPro />} />
            <Route path="/register-profesionales" element={<RegisterPro />} />
            <Route path="/login/pacientes" element={<LoginPac />} />
            <Route path="/register-pacientes" element={<RegisterPac />} />
            <Route
              path="/reset-password/profesionales"
              element={<InterResetPro />}
            />
            <Route
              path="/reset-password/pacientes"
              element={<InterResetPac />}
            />
            <Route
              path="/reset-password/profesionales/:id_pro"
              element={<ResetPro />}
            />
            <Route
              path="/reset-password/paciente/:id_paciente"
              element={<ResetPac />}
            />
          </Routes>
        </>
      ) : (
        <></>
      )}

      {!profesional ? (
        <></>
      ) : (
        <div>
          <Routes>
            <Route path="/dashboard/:id_pro" element={<Dashboard />} />
            <Route path="/" element={<Home />} />
          <Route
              path="/reset-password/profesionales/:id_pro"
              element={<ResetPro />}
            />
            <Route
              path="/auth-password/profesionales/:id_pro"
              element={<AuthPasswordPro />}
            />
            <Route path="/historia_clinica" element={<HistoriaClinica />} />
            <Route
              path="/historia_clinica/:id_paciente"
              element={<HCPaciente />}
            />
            <Route
              path="/antecedentes_familiares/:id_paciente"
              element={<AntecedentesFam />}
            />
            <Route
              path="/antecedentes_personales/:id_paciente"
              element={<AntecedentesPer />}
            />
            <Route path="/habitos/:id_paciente" element={<HabitosFisio />} />
            <Route
              path="/create_historia/:id_paciente"
              element={<CreateHistoria />}
            />
            <Route path={`/ver-turnos/:id_pro`} element={<VerTurnos />} />
            <Route path={`/turnos/:id_paciente`} element={<GestionarTurno />} />
            <Route
              path="/solicitar-turno/:id_pro"
              element={<SolicitarTurno />}
            />
            <Route path="/pacientes" element={<ListPacientes />} />

            <Route path="/perfil/profesional/:id_pro" element={<PerfilPro />} />
            <Route path="/desactivar-cuenta/profesional/:id_pro" element={<DeleteProAccount />} />
            <Route
              path="/perfil/pacientes/:id_paciente"
              element={<PerfilPac />}
            />
          </Routes>
        </div>
      )}

      {!paciente ? (
        <></>
      ) : (
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard/:id_paciente" element={<Dashboard />} />
            <Route
              path="/reset-password/paciente/:id_paciente"
              element={<ResetPac />}
            />
                        <Route
              path="/auth-password/paciente/:id_paciente"
              element={<AuthPasswordPac />}
            />
            <Route path="/solicitar-turno" element={<SolicitarTurno />} />
            <Route path="/profesionales" element={<Profesionales />} />
            <Route path="/perfil/profesional/:id_pro" element={<PerfilPro />} />
            <Route path="/desactivar-cuenta/paciente/:id_paciente" element={<DeletePacAccount />} />

            <Route
              path="/ver-perfil/profesional/:id_pro"
              element={<VerPerfilPro />}
            />
            <Route
              path="/perfil/pacientes/:id_paciente"
              element={<VerPerfilPac />}
            />
          </Routes>
        </div>
      )}
    </>
  );
}

export default App;
