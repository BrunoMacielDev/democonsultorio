import { Link, useParams } from "react-router-dom";
import { useToast } from "@chakra-ui/react";
import "./deleteAccount.css";
import { useState } from "react";
import * as API from "../../services/services.js";

const DeletePacAccount = () => {
  const { id_paciente } = useParams();
  const toast = useToast();

  const handleDeleteAccount = async (e) => {
    e.preventDefault();
    const response = await API.deletePacAccount(id_paciente);
      if (response.status) {
        toast({
          title: response.message,
          status: "success",
          isClosable: true,
        });
        window.localStorage.removeItem("profesional");
        window.localStorage.removeItem("paciente");
        setTimeout(() => {
          window.location.replace(`/login/pacientes`);
        }, 2000);
      } else {
        toast({
          title: response.message,
          status: "error",
          isClosable: true,
        });
      }
  };

  return (
    <div className="gradient__bg container__deleteAccount">
      <div className="container__deleteAccount-card">
        <div className="container__deleteAccount-card_column">
          <h1>Desactivar cuenta</h1>
          <h3>¿Esta seguro que quiere desactivar su cuenta?</h3>
          <p>
            Si desea volver mas adelante, deberá comunicarse con administracion.
          </p>
          <div className="actions">
            <div className="flex">
              <button type="button" onClick={handleDeleteAccount}>
                Desactivar
              </button>
              <Link to={"/perfil/pacientes/" + id_paciente}>Volver</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeletePacAccount;
