import React from 'react'

const Tarjeta = (nombre) => {
    // console.log(nombre);
    const {nombre: rey} = nombre;
    // console.log(rey);
    const nombreMostrar = rey.substring(0,1).toUpperCase() + rey.substring(1);
    // console.log(nombreMostrar);
  return (
    <>
      <div className="tarjeta">
        <div className="titulo">Reyes</div>
        <div className="cuerpo">
          <img src={`/images/${rey}.jpeg`} alt="muestra" />
        </div>
        <div className="pie">
          <div>{nombreMostrar}</div>
        </div>
      </div>
    </>
  );
}

export default Tarjeta