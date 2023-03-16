// ONLY PAC
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../containers/footer/Footer";
import ProList from "../../containers/prolist/ProList";

function Profesionales() {
  return (
    <>
      <div className="gradient__bg">
        <Navbar />
      </div>
      <ProList />
      <Footer />
    </>
  );
}

export default Profesionales;
