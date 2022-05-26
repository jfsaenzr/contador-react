import './App.css';
import Boton from './componentes/Boton';
import logo from './imganes/logo.png';

function App() {

  const manejarClick = () => {
    console.log('Click')
  }

  const reiniciarContador = () => {
    console.log('Reiniciar')
  }

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
        <Boton
          texto='Click'
          esBotonDeClick={true}
          manejarClick={manejarClick}
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
