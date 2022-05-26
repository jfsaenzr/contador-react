import './App.css';
import Boton from './componentes/Boton';
import Contador from './componentes/Contador';
import logo from './imagenes/logo.png';
import { useState } from 'react'

function App() {

  const [numClicks, setNumClicks] = useState(0);

  const manejarClick = () => {
    setNumClicks(numClicks + 1);
  };

  const manejarClickRestar = () => {
    setNumClicks(numClicks - 1);
  };

  const reiniciarContador = () => {
    setNumClicks(0);
  };

  return (
    <div className="App">
      <div className='logo-contenedor'>
        <img
          className='logo'
          src={logo}
          alt='logo'
        />
      </div>

      <div className='contenedor-principal'>

        <h2>Contador en React.js</h2>

        <Contador numClicks={numClicks} />

        <Boton
          texto='+'
          esBotonDeClick={true}
          manejarClick={manejarClick}
        />
        <Boton
          texto='-'
          esBotonDeClick={true}
          manejarClick={manejarClickRestar}
        />
        <Boton
          texto='Reiniciar'
          esBotonDeClick={false}
          manejarClick={reiniciarContador}
        />
      </div>
    </div>
  );
}

export default App;
