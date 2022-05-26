import React from 'react';

const Tarjeta = (nombre) => {
  // console.log(nombre);
  const { nombre: rey } = nombre;
  // console.log(rey);
  const nombreMostrar = rey.substring(0, 1).toUpperCase() + rey.substring(1);
  // console.log(nombreMostrar);
  return (
    <>
      <div className="caja">
        <img src={`/images/${rey}.jpeg`} alt="muestra" />
        <div className="nombre">{nombreMostrar}</div>
      </div>
    </>
  );
};

export default Tarjeta;
