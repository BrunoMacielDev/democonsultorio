// ONLY PRO
// ONLY PAC

import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../containers/footer/Footer";
import Seccion from "../../containers/seccion/Seccion";
import "./home.css";

function Home() {
  return (
    <>
      <div>
        <div className="gradient__bg">
          <Navbar txtBtn1={"Ingresar"} toLogin={"/login"} />
          <Seccion />
        </div>
        <Footer
          direct={"/"}
          texto1={"Una herramienta para tu consultorio"}
          texto2={"Conocer mas"}
        />
      </div>
    </>
  );
}

export default Home;
