import React, { Fragment, useState } from "react";
import imagePlayer1 from "../../images/player1.png";
import imagePlayer2 from "../../images/player2.svg";
import "./editarJugadores.scss";

const EditarJugadores = ({
  listjugadores,
  guardarlistjugadores,
  guardarEditandoJugadores
}) => {
  const [cambioJugador1, guardarCambioJugador1] = useState(
    listjugadores[0].nombre
  );
  const [cambioJugador2, guardarCambioJugador2] = useState(
    listjugadores[1].nombre
  );

  const handleUpdatePlayer = e => {
    e.preventDefault();

    guardarlistjugadores([
      {
        id: 1,
        nombre: cambioJugador1,
        puntos: listjugadores[0].puntos,
        activo: listjugadores[0].activo
      },
      {
        id: 2,
        nombre: cambioJugador2,
        puntos: listjugadores[1].puntos,
        activo: listjugadores[1].activo
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
        </Fragment>
      ) : (
        <Fragment>
          <img className="jugador-icon" src={imagePlayer2} alt="icono-player" />
          <input
            className="jugador-nombre"
            onChange={e => guardarCambioJugador2(e.target.value)}
            defaultValue={jugador.nombre}
          />
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
