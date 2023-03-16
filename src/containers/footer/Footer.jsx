import React from 'react';
import './footer.css'
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom';

const Footer = ({texto1}) => {
  return (
    <div className='consultorio__footer section__padding'>
      <div className='consultorio__footer-heading'>
        <h1 className='gradient__text'>{texto1}</h1>
      </div>
      <div className='consultorio__footer-btn'>
        <p><a href="#">Volver arriba</a></p>
      </div>
      <div className='consultorio__footer-links'>
        <div className='consultorio__footer-links_logo'>
          <img src={logo} alt="logo" />
          <p>Sarmiento 2224. Posadas, Mnes. Argentina, Todos los derechos reservados</p>
        </div>
        <div className='consultorio__footer-links_div'>
          <h4>Links</h4>
          <p>Profesionales</p>
          <p>Coberturas medicas</p>
          <p>Redes sociales</p>
        </div>
        <div className='consultorio__footer-links_div'>
          <h4>Empresa</h4>
          <p>Terminos y Condiciones</p>
          <p>Politica de Privacidad</p>
          <p>Contacto</p>
        </div>
        <div className='consultorio__footer-links_div'>
          <h4>Desarrollado por Bruno Maciel</h4>
          <p>Sarmiento 2000. Posadas, Mnes. Argentina</p>
          <p>+54 9 3756 514248</p>
          <p>brunomacielcf@gmail.com</p>
        </div>
      </div>
      <div className='consultorio__footer-copyright'>
        <p>© 2023 Bruno Maciel. Todos los derechos reservados.</p>
      </div>
    </div>
  )
}

export default Footer