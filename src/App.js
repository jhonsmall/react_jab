import React, {useState} from 'react';
import './miCss.css';

function App() {
  const [nombre, setNombre] = useState('Rey');
  // let nombre = 'rey';
  const cambiar = () => {
    setNombre('Juan');
    console.log(nombre);
  } 
  return (
    <div className="contenedor">
      <h1>Me llamo {nombre}</h1>
      <button onClick={cambiar}>Cambiar Nombre</button>
    </div>
  );
}

export default App;
