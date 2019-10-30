import React, { Fragment, useState } from "react";
import imagePlayer1 from "../../images/player1.png";
import imagePlayer2 from "../../images/player2.svg";
import "./editarJugadores.scss";

const EditarJugadores = ({listjugadores,guardarlistjugadores,guardarEditandoJugadores}) => {
  
  const [cambioJugador1, guardarCambioJugador1] = useState(
    listjugadores[0].nombre
  );
  const [cambioJugador2, guardarCambioJugador2] = useState(
    listjugadores[1].nombre
  );
  const [sexoJugador1, guardarsexoJugador1] = useState(
    listjugadores[0].sexMan
  );
  const [sexoJugador2, guardarsexoJugador2] = useState(
    listjugadores[1].sexMan
  );

  const handleUpdatePlayer = e => {
    e.preventDefault();
    const sexJug1 = sexoJugador1 === "m" ? true : false;
    const sexJug2 = sexoJugador2 === "m" ? true : false;

    guardarlistjugadores([
      {
        id: 1,
        nombre: cambioJugador1,
        puntos: listjugadores[0].puntos,
        activo: listjugadores[0].activo,
        sexMan: sexJug1
      },
      {
        id: 2,
        nombre: cambioJugador2,
        puntos: listjugadores[1].puntos,
        activo: listjugadores[1].activo,
        sexMan: sexJug2
      }
    ]);
    guardarEditandoJugadores(false);
  };

  const jugadorPuntos = listjugadores.map(jugador => (
    <div key={jugador.id} className="jugador">
      {jugador.id === 1 ? (
        <Fragment>
          <img className="jugador-icon" src={imagePlayer1} alt="icono-player" />
          <input
            className="jugador-nombre"
            onChange={e => guardarCambioJugador1(e.target.value)}
            defaultValue={jugador.nombre}
          />
          <div className="sex-player">
            <input 
              name="sexo1" 
              type="radio" 
              value="m" 
              defaultChecked={jugador.sexMan}
              onChange={e => guardarsexoJugador1(e.target.value)}/>Hombre
            <input 
              name="sexo1" 
              type="radio" 
              value="f" 
              defaultChecked={!jugador.sexMan}
              onChange={e => guardarsexoJugador1(e.target.value)}/>Mujer
          </div>
        </Fragment>
      ) : (
        <Fragment>
          <img className="jugador-icon" src={imagePlayer2} alt="icono-player" />
          <input
            className="jugador-nombre"
            onChange={e => guardarCambioJugador2(e.target.value)}
            defaultValue={jugador.nombre}
          />
          <div className="sex-player">
            <input 
              name="sexo2" 
              type="radio" 
              value="m" 
              defaultChecked={jugador.sexMan}
              onChange={e => guardarsexoJugador2(e.target.value)}/>Hombre
            <input 
              name="sexo2" 
              type="radio" 
              value="f" 
              defaultChecked={!jugador.sexMan}
              onChange={e => guardarsexoJugador2(e.target.value)}/>Mujer
          </div>
        </Fragment>
      )}
    </div>
  ));

  return (
    <Fragment>
      <h2>Editar Jugadores</h2>
      <form onSubmit={e => handleUpdatePlayer(e)} className="jugadores-form">
        {jugadorPuntos}
        <input className="jugadores-form-btn" type="submit" value="Guardar" />
      </form>
    </Fragment>
  );
};

export default EditarJugadores;
