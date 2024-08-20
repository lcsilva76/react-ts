import styles from './Componente1.module.css'

import { Button } from '../styled'

type DadosProps = {
    aviso: ()=> void
}


export default function Componente1({aviso}:DadosProps){

    const style = {
        backgroundColor: 'red',
        color: 'white',
        padding: '10px',
    }

    

    return(
        <div className={styles.principal}>
            <h2>Componente 1</h2>
            <p style={{border:'4px solid green',padding:'20px'}}>Exemplo Inline</p>
            <p style={style}>Exemplo com objeto</p>
            <Button  onClick={()=>aviso()}>Clicar</Button>
        </div>
    )
}