import style from 'styled-components'


const DivComp2 = style.div`
   color: red;
   font-size: 20px;
   font-weight: bold;

`


export const Componente2 = ()=>{

    return(
        <DivComp2>
            <h2>Componente 2</h2>
        </DivComp2>
    )
}