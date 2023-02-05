import './App.css';
import Boton from './componentes/Boton';
import Contador from './componentes/contador';
import ReactLogo from './imagenes/React_logo_wordmark.png'
import { useState } from 'react';


function App() {

  const [numClics, setNumClics] = useState(0)

  const manejarClic = () => {
    setNumClics(numClics + 1)
  }

  const reiniciarContador = () => {
    setNumClics(0)
  }

  return (
    <div className="App">
      <div className='logoDeMiProyecto'>
        <img
          className='logo'
          src={ReactLogo}
          alt='Logo de React'
        />
      </div>
      <div className='contenedor-principal'>
      <Contador numClics={numClics} />
        <Boton
          texto='Clic'
          esBotonDeClic={true}
          manejarClick={manejarClic} />
        <Boton
          texto='Reiniciar'
          esBotonDeClic={false}
          manejarClick={reiniciarContador} />
      </div>
    </div>
  );
}

export default App;
