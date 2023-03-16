// ONLY PRO

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import * as API from "../../services/services";
import EditTurnoCard from "../../components/editTurnoCard/EditTurnoCard";
import { MdLoop } from "react-icons/md";
import {
  IoCheckmarkCircleOutline,
  IoCloseCircleOutline,
  IoSettingsOutline,
} from "react-icons/io5";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../containers/footer/Footer";
import moment from "moment";
import {
  useToast,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import { SolicitarTurnoCard } from "../../components";
import "./turnos.css";

function GestionarTurno() {
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { id_paciente } = useParams();
  const [pro, setPro] = useState("");
  const [turnos, setTurnos] = useState("");
  const [turnosAll, setTurnosAll] = useState("");
  const [nombrePac, setNombrePac] = useState("");

  useEffect(() => {
    handleDatosPac(id_paciente);
  }, []);

  const handleDatosPac = async () => {
    const response = await API.getPacientesById(id_paciente);
    const paciente = `${response.nombre} ${response.apellido}`;
    setNombrePac(paciente);
  };

  useEffect(() => {
    handleTurnos(id_paciente);
  }, []);

  useEffect(() => {
    handleAllTurnos(id_paciente);
  }, []);

  useEffect(() => {
    handleProfesional(id_paciente);
  }, []);

  const handleProfesional = async () => {
    const profesionalLogueado = JSON.parse(localStorage.getItem("profesional"));
    const id_pro = profesionalLogueado.data[0].id_pro;
    setPro(id_pro);
  };

  const handleAllTurnos = async () => {
    const profesionalLogueado = JSON.parse(localStorage.getItem("profesional"));
    const datos = {
      id_pro: profesionalLogueado.data[0].id_pro,
    };
    const response = await API.getAllTurnosByPacPro(id_paciente, datos);
    setTurnosAll(response.datos);
  };

  const handleTurnos = async () => {
    const profesionalLogueado = JSON.parse(localStorage.getItem("profesional"));
    const datos = {
      id_pro: profesionalLogueado.data[0].id_pro,
    };
    const response = await API.getTurnosByPacPro(id_paciente, datos);
    setTurnos(response.datos);
  };

  const handleCancel = async (turnoID) => {
    const response = await API.bajaTurnoById(turnoID);
    if (response.status) {
      toast({
        title: response.message,
        status: "warning",
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

  const handleConfirm = async (id_turno) => {
    const response = await API.confirmTurno(id_turno);
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
      <div className="gradient__bg">
        <Navbar />
      </div>
      <div className="gradient__bg section__padding">
        <div className="solicitar-turno_heading">
          <h1 className="gradient__text">Turnos</h1>
          <p style={{ color: "white" }}>Paciente: {nombrePac}</p>
        </div>
        <div className="asignar-turno">
          <SolicitarTurnoCard
            title={"Asignar Turno"}
            id_pro={pro}
            pacID={id_paciente}
          />
        </div>
        <div className="list_turnos section__margin">
          <div className="list-header">
            <h2>Turnos activos y pendientes</h2>
            <MdLoop onClick={handleTurnos} />
          </div>
          {turnos == "" ? (
            <h1 style={{ color: "white" }}>No existen turnos</h1>
          ) : (
            <table>
              <thead>
                <tr>
                  <th>Fecha</th>
                  <th>Hora</th>
                  <th>Estado</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                {turnos.map((item, index) => (
                  <tr key={index}>
                    <td>{moment(item.fecha).format("LL")}</td>
                    <td>{moment(item.hora, "hh:mm").format("HH:mm")}</td>
                    <td>{item.estado}</td>
                    <td>
                      <div className="turnos__actions">
                        {item.estado == "Activo" ? (
                          <>
                            <button
                              type="button"
                              className="cross"
                              onClick={() => handleCancel(item.id_turno)}
                            >
                              <IoCloseCircleOutline />
                            </button>
                            <button
                              type="button"
                              className="edit"
                              onClick={onOpen}
                            >
                              <IoSettingsOutline />
                              <Modal isOpen={isOpen} onClose={onClose}>
                                <ModalOverlay />
                                <ModalContent>
                                  <ModalHeader>Modificar turno</ModalHeader>
                                  <ModalCloseButton />
                                  <EditTurnoCard
                                    id_turno={item.id_turno}
                                    id_pro={pro}
                                  />
                                  <ModalFooter></ModalFooter>
                                </ModalContent>
                              </Modal>
                            </button>
                          </>
                        ) : (
                          <>
                            <button
                              type="button"
                              className="check"
                              onClick={() => handleConfirm(item.id_turno)}
                            >
                              <IoCheckmarkCircleOutline />
                            </button>
                            <button
                              type="button"
                              className="cross"
                              onClick={() => handleCancel(item.id_turno)}
                            >
                              <IoCloseCircleOutline />
                            </button>
                          </>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
        <div className="list_turnos section__margin">
          <div className="list-header">
            <h2>Historial de turnos</h2>
            <MdLoop onClick={handleAllTurnos} />
          </div>
          {turnosAll == "" ? (
            <h1 style={{ color: "white" }}>No existen turnos</h1>
          ) : (
            <table>
              <thead>
                <tr>
                  <th>Fecha</th>
                  <th>Hora</th>
                  <th>Estado</th>
                </tr>
              </thead>
              <tbody>
                {turnosAll.map((item, index) => (
                  <tr key={index}>
                    <td>{moment(item.fecha).format("LL")}</td>
                    <td>{moment(item.hora, "hh:mm").format("HH:mm")}</td>
                    <td>{item.estado}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default GestionarTurno;
