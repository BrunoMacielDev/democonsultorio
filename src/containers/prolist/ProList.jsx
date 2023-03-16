import { useState, useEffect } from "react";
import "./prolist.css";
import ProCard from "../../components/ProCard/ProCard";
import * as API from "../../services/services";

const Servicios = () => {
  const [profesionales, setProfesionales] = useState([]);

  useEffect(() => {
    API.getProfesionales().then(setProfesionales);
  }, []);

  return (
    <div className="prolist gradient__bg section__padding">
      <div className="prolist-heading">
        <h1 className="gradient__text">Profesionales</h1>
      </div>
      <div className="prolist-container">
        <div className="prolist-container_groupB">
          {profesionales.map((item, index) => (
            <ProCard
              key={index}
              profesional={item.profesional}
              area={item.area}
              matricula={item.matricula}
              id_pro={item.id_pro}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Servicios;
