type DadosProps = {
    aviso: ()=> void
}


export default function Componente1({aviso}:DadosProps){

    return(
        <div>
            <h2>Componente 1</h2>
            <button onClick={()=>aviso()}>Clicar</button>
        </div>
    )
}