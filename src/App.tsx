import './App.css'

import Componente1 from "./components/Componente1"
import { Componente2 } from './components/Componente2';
import { Componente3 } from './components/Componente3';

function App() {

  const aviso = ()=>{
    alert("Hola mundo");
  }

  return (
    <>
      <Componente1 aviso={aviso}/>
      <Componente2/>
      <Componente3/>
    </>
  )
}

export default App
