import React from 'react';
import './articulo.css';

const Articulo = ({imgUrl, parrafo, titulo}) => {
  return (
    <div className='seccion__servicios-container_article'>
      <div className='seccion__servicios-container_article-image'>
        <img src={imgUrl} alt="servicio" />
      </div>
      <div className='seccion__servicios-container_article-content'>
        <div>
          <h3>{titulo}</h3>
          <p>{parrafo}</p>
        </div>
      </div>
    </div>
  )
}

export default Articulo