import React from "react";
import "./obras_sociales.css";
import { medife, osde, galeno, avalian, swiss } from "./import";

const Brand = () => {
  return (
    <div className="obras_sociales section__padding">
      <div>
        <img src={medife} alt="medife" />
      </div>
      <div>
        <img src={osde} alt="osde" />
      </div>
      <div>
        <img src={galeno} alt="galeno" />
      </div>
      <div>
        <img src={avalian} alt="avalian" />
      </div>
      <div>
        <img src={swiss} alt="swiss" />
      </div>
    </div>
  );
};

export default Brand;