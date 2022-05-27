import React, {useState} from 'react';
import Aficion from './components/aficion';
import './App.css';

const App = () => {
const [aficiones, setAficiones] = useState({});
  const reyesGodos = [
    {
      nombre: 'Ataúlfo',
      aficion: 'comer toros sin pelar',
    },
    {
      nombre: 'Recesvinto',
      aficion: 'leer a Hegel en arameo',
    },
    {
      nombre: 'Teodorico',
      aficion: 'la cría del escarabajo en almíbar',
    },
  ];

  const Siguiente = () => {
    const random = Math.floor(Math.random() * reyesGodos.length);
    const rey = reyesGodos[random];
    console.log(rey);
    setAficiones(rey);
  };

  return (
    <>
      <button
        className="button"
        onClick={() => {
          Siguiente();
        }}
      >
        Siguiente...
      </button>

      <div className="caja">
        <Aficion nombre={aficiones.nombre} aficion={aficiones.aficion} />
      </div>
    </>
  );
};
export default App;
