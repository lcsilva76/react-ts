import Componente1 from "./components/Componente1"

function App() {

  const aviso = ()=>{
    alert("Hola mundo");
  }

  return (
    <>
      <Componente1 aviso={aviso}/>
    </>
  )
}

export default App
