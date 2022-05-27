import React, { useState } from 'react';

import Cena  from './components/Cena';

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

  return (
    <>
      <div className="total-pagar"> Total a Pagar: {valor} € </div>
      <div className="contenedor">
        {reyesData.map((rey) => (
          <Cena rey={rey} setValor={setValor} setReyesData={setReyesData} />
        ))}
      </div>
    </>
  );
};
export default App;
