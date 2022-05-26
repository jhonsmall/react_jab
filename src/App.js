import React, { useState } from 'react';
import './App.css';

function App() {
  let [numero1, setNumero1] = useState(0);
  let [numero2, setNumero2] = useState(0);
  let [resultado, setResultado] = useState(0);
  const sumar = () => {
    setResultado(Number(numero1) + Number(numero2));
  };

  const modificar = (e) => {
    if (e.target.name === 'numero1') {
      setNumero1(e.target.value);
    } else {
      setNumero2(e.target.value);
    }
  };

  return (
    <div className="caja">
      <input type="number" name='numero1' value={numero1} onChange={modificar} /> +
      <input type="number" name='numero2' value={numero2} onChange={modificar} /> =
      <input type="number" value={resultado} readOnly />
      <button onClick={sumar}>Sumar</button>
    </div>
  );
}

export default App;
