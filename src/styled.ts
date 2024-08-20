import styled from 'styled-components'

export const DivComp3 = styled.div`
    border: 2px solid yellow;
    padding: 20px;
    background-color: #ffdddd;

`

export const Button = styled.button`
    background-color: ${props => props.style ? '#00f': '#999'};
    border-radius: 10px;
    padding: 5px;
    color: #fff;
    border:none;

`