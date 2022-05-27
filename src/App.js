import React, { useState } from 'react';
import './miCss.css';

  const reyes = [
    {
      nombre: 'Atanagildo',
      color: 'darkolivegreen',
      precio: 178,
    },
    {
      nombre: 'Ervigio',
      color: 'crimson',
      precio: 169,
    },
    {
      nombre: 'Ataúlfo',
      color: 'peru',
      precio: 81,
    },
    {
      nombre: 'Leogivildo',
      color: 'darkmagenta',
      precio: 126,
    },
    {
      nombre: 'Recesvinto',
      color: 'royalblue',
      precio: 141,
    },
    {
      nombre: 'Sisebuto',
      color: 'teal',
      precio: 69,
    },
  ];

const App = () => {
  const [valor, setValor] = useState(0);

  const [reyesData, setReyesData] = useState(reyes);

  const changeValor = (nombre, precio) => {
    setValor(valor + precio);
    removeReyesData(nombre);
  };


  const removeAccents = (str) => {
    return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
  };

  const removeReyesData = (nombre) => {
    const remove = reyesData.filter(rey => rey.nombre !== nombre);
    setReyesData(remove);
  };


  return (
    <>
      <div className="total-pagar"> Total a Pagar: {valor} </div>
      <div className="contenedor">
        {reyesData.map((rey) => (       
          <div className="caja" style={{backgroundColor: rey.color}}  key={rey.nombre}>
            <div className="nombre">{rey.nombre}</div>
            <img
              src={`https://www.html6.es/img/rey_` + removeAccents(rey.nombre) +`.png`
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
        ))}
      </div>
    </>
  );
};
export default App;
