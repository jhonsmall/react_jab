import React from 'react';

const Cena = ({rey, setValor, setReyesData}) => {
  const removeAccents = (str) => {
    return str
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .toLowerCase();
  };

  const changeValor = (nombre, precio) => {
    setReyesData(data => data.filter((rey) => rey.nombre !== nombre));
    setValor(valor => valor + precio);
  };

  return (
    <>
      <div
        className="caja"
        style={{ backgroundColor: rey.color }}
        key={rey.nombre}
      >
        <div className="nombre">{rey.nombre}</div>
        <img
          src={
            `https://www.html6.es/img/rey_` + removeAccents(rey.nombre) + `.png`
          }
          alt=""
        />
        <div className="left-color">Precio:</div>
        <div className="left-color">{rey.precio}</div>
        <button
          className="left"
          onClick={() => changeValor(rey.nombre, rey.precio)}
        >
          {' '}
          Comprar{' '}
        </button>
      </div>
    </>
  );
};

export default Cena;
