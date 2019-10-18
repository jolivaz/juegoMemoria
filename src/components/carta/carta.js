import React from 'react'
import Logo from '../../images/logo.png'
import './carta.scss'

const Tablero = ({baraja,adivinarCartas,guardarAdivinarCartas}) => {
    const seleccionarCarta = (e) => {
        e.preventDefault();
        baraja.estado = true;
        guardarAdivinarCartas([...adivinarCartas, baraja])
    }
    return (
        <div className="carta carta">
            <h3 className={baraja.estado || baraja.adivinada ? 'active ' : 'desactive'} >
                    {baraja.carta}
            </h3>
            <img 
                className={!baraja.estado && !baraja.adivinada ? 'active' : 'desactive'} 
                src={Logo} alt="carta"
                onClick={(e) => seleccionarCarta(e)} />
        </div>
    )
}

export default Tablero;