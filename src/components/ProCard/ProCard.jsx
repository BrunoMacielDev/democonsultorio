import React from "react";
import "./ProCard.css";
import { Link } from "react-router-dom";

const ProCard = ({ area, profesional,id_pro, matricula }) => {
  return (
    <div className="prolist-container_article">
      
      <div className="prolist-container_article-content">
        <div>
          <h3>{profesional}</h3>
          <p>{area}</p>
          <p>{matricula}</p>
        </div>
        <div className="procard-btn">
          <button type="button">
            <Link to={`/ver-perfil/profesional/${id_pro}`}>{"Ver"}</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProCard;
