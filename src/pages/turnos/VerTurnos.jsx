// ONLY PRO

import "./turnos.css";
import { useState, useEffect } from "react";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../containers/footer/Footer";
import EditTurnoCard from "../../components/editTurnoCard/EditTurnoCard";
import * as API from "../../services/services";
import { Link, useParams } from "react-router-dom";
import { IoEye, IoCalendarNumber } from "react-icons/io5";
import {
  useToast,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import moment from "moment";
import { MdLoop } from "react-icons/md";
import {
  IoCheckmarkCircleOutline,
  IoCloseCircleOutline,
  IoSettingsOutline,
} from "react-icons/io5";

function Turnos() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { id_pro } = useParams();
  const [turnos, setTurnos] = useState("");
  const [turnosAll, setTurnosAll] = useState("");
  const toast = useToast();

  useEffect(() => {
    API.getTurnosByPro(id_pro).then(setTurnos);
  }, []);

  useEffect(() => {
    API.getAllTurnosByPro(id_pro).then(setTurnosAll);
  }, []);

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

  const handleHistorialTurnos = async () => {
    const response = await API.getTurnosByPro(id_pro);
    setTurnos(response);
  };

  const handleAllHistorialTurnos = async () => {
    const all = await API.getAllTurnosByPro(id_pro);
    setTurnosAll(all);
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

  return (
    <>
      <div className="gradient__bg">
        <Navbar />
      </div>
      <div className="gradient__bg">
        <div className="solicitar-turno_heading">
          <h1 className="gradient__text">Turnos</h1>
        </div>
        <div className="list_turnos ">
          <div className="list-header">
            <h2>Turnos activos y pendientes</h2>
            <MdLoop onClick={handleHistorialTurnos} />
          </div>
          {turnos == "" ? (
            <h1 style={{color:"white"}}>No existen turnos</h1>
          ) : (
            <table>
              <thead>
                <tr>
                  <th>&nbsp;</th>
                  <th>Paciente</th>
                  <th>Turno</th>
                  <th>Estado</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                {turnos.map((item, index) => (
                  <tr key={index}>
                    <td>
                      <button type="button">
                        <Link to={"/turnos/" + item.id_paciente}>
                          {<IoEye />}
                        </Link>
                      </button>
                    </td>
                    <td>{item.paciente}</td>
                    <td>
                      {moment(item.fecha).format("ll")} a las{" "}
                      {moment(item.hora, "hh:mm").format("HH:mm")}
                    </td>
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
                                    id_pro={id_pro}
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
        <div className="list_turnos ">
          <div className="list-header">
            <h2>Historial de turnos</h2>
            <MdLoop onClick={handleAllHistorialTurnos} />
          </div>
          {turnosAll == "" ? (
            <h1 style={{color:"white"}}>No existen turnos</h1>
          ) : (
            <table>
              <thead>
                <tr>
                  <th>&nbsp;</th>
                  <th>Paciente</th>
                  <th>Fecha</th>
                  <th>Hora</th>
                  <th>Estado</th>
                </tr>
              </thead>
              <tbody>
                {turnosAll.map((item, index) => (
                  <tr key={index}>
                    <td>
                      <button type="button">
                        <Link to={"/turnos/" + item.id_paciente}>
                          {<IoEye />}
                        </Link>
                      </button>
                    </td>
                    <td>{item.paciente}</td>
                    <td>{moment(item.fecha).format("LL")}</td>
                    <td>{moment(item.hora, "hh:mm").format("HH:mm")}</td>
                    <td>{item.estado=='Activo'?(<p style={{color:'green'}}>Activo</p>):(item.estado)}</td>
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

export default Turnos;
