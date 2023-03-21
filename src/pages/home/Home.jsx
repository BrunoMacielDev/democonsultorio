// ONLY PRO
// ONLY PAC

import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../containers/footer/Footer";
import Seccion from "../../containers/seccion/Seccion";

function Home() {
  return (
    <>
      <div>
        <div className="gradient__bg">
          <Navbar />
          <Seccion />
        </div>
        <Footer
          direct={"/"}
          texto1={"Una herramienta ideal para tu negocio"}
        />
      </div>
    </>
  );
}

export default Home;
