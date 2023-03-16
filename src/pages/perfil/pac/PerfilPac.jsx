// ONLY PRO
// ONLY PAC

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import * as API from "../../../services/services";
import { IoCaretDownOutline } from "react-icons/io5";
import "./perfilPac.css";
import Navbar from "../../../components/navbar/Navbar";
import Footer from "../../../containers/footer/Footer";
import {
  CreateAnPer,
  CreateHistoria,
  CreateAnFam,
  CreateHabitos,
  AntecedentesFam,
  AntecedentesPer,
  HabitosFisio,
  HCPaciente,
  DatosPac,
} from "../../index";

function PerfilPac() {
  const tabs = [
    "Datos",
    "General",
    "Habitos",
    "Antecedentes Familiares",
    "Antecedentes Personales",
  ];
  const { id_paciente } = useParams();
  const [historia, SetHistoria] = useState([]);
  const [habitos, SetHabitos] = useState([]);
  const [anFam, SetAnFam] = useState([]);
  const [anPer, SetAnPer] = useState([]);

  useEffect(() => {
    API.getHistoriaById(id_paciente).then(SetHistoria);
  }, []);
  useEffect(() => {
    API.getHabitosById(id_paciente).then(SetHabitos);
  }, []);
  useEffect(() => {
    API.getAnFamiliaById(id_paciente).then(SetAnFam);
  }, []);
  useEffect(() => {
    API.getAnPersonalesById(id_paciente).then(SetAnPer);
  }, []);

  return (
    <>
      <div className="gradient__bg">
        <Navbar txtBtn1={"Salir"} toLogin={"/"} />
      </div>

      <div className="gradient__bg container__perfilPac">
        <div className="container__perfilPac-card">
          <div className="container__perfilPac-card_column">
            <Tabs>
              <TabList px={5}>
                {tabs.map((tab) => (
                  <Tab
                    key={tab}
                    mx={3}
                    px={0}
                    py={3}
                    fontWeight="semibold"
                    borderBottomWidth={1}
                    className="tabs"
                  >
                    {tab}
                  </Tab>
                ))}
              </TabList>
              <TabPanels px={3} mt={5}>
                <TabPanel>
                  <DatosPac />
                </TabPanel>
                {historia === undefined ? (
                  <TabPanel>
                    <CreateHistoria />
                  </TabPanel>
                ) : (
                  <TabPanel>
                    <HCPaciente />
                  </TabPanel>
                )}
                {habitos === undefined ? (
                  <TabPanel>
                    <CreateHabitos />
                  </TabPanel>
                ) : (
                  <TabPanel>
                    <HabitosFisio />
                  </TabPanel>
                )}

                {anFam === undefined ? (
                  <TabPanel>
                    <CreateAnFam />
                  </TabPanel>
                ) : (
                  <TabPanel>
                    <AntecedentesFam />
                  </TabPanel>
                )}
                {anPer === undefined ? (
                  <TabPanel>
                    <CreateAnPer />
                  </TabPanel>
                ) : (
                  <TabPanel>
                    <AntecedentesPer />
                  </TabPanel>
                )}
              </TabPanels>
            </Tabs>
          </div>
        </div>
      </div>

      <div className="Footer">
        <Footer />
      </div>
    </>
  );
}

export default PerfilPac;
