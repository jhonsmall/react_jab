import './miCss.css';
import Tarjeta from './components/tarjeta';

function App() {
  return (
    <div className="contenedor">
      <Tarjeta nombre="sisebuto"/>
      <Tarjeta nombre="leovigildo"/>
      <Tarjeta nombre="antanagildo"/>
    </div>
  );
}

export default App;
