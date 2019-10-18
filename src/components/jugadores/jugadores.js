import React from "react";
import imagePlayer1 from "../../images/player1.png";
import imagePlayer2 from "../../images/player2.svg";
import EditarJugadores from "../editarJugadores/editarJugadores";
import "./jugadores.scss";

const Jugadores = ({
  listjugadores,
  jugador1Activo,
  editandoJugadores,
  guardarlistjugadores,
  guardarEditandoJugadores
}) => {
  const handleEditar = e => {
    e.preventDefault();
    guardarEditandoJugadores(true);
  };

  const jugadorPuntos = listjugadores.map(jugador => (
    <div key={jugador.id} className="jugador">
      {jugador.id === 1 ? (
        <img
          className={jugador1Activo ? "jugador-activo" : "jugador-icon"}
          src={imagePlayer1}
          alt="icono-player"
        />
      ) : (
        <img
          className={!jugador1Activo ? "jugador-activo" : "jugador-icon"}
          src={imagePlayer2}
          alt="icono-player"
        />
      )}
      <p className="jugador-nombre">{jugador.nombre}:</p>
      <p className="jugador-puntos">{jugador.puntos}</p>
    </div>
  ));

  return (
    <div>
      <div className="jugadores">
        {jugadorPuntos}
        <button onClick={e => handleEditar(e)}>Editar Jugadores</button>
      </div>
      {editandoJugadores ? (
        <EditarJugadores
          listjugadores={listjugadores}
          guardarlistjugadores={guardarlistjugadores}
          guardarEditandoJugadores={guardarEditandoJugadores}
        />
      ) : null}
    </div>
  );
};

export default Jugadores;
