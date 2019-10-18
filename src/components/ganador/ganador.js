import React from "react";
import "./ganador.scss";

const Ganador = ({ listjugadores }) => {
  const ganador = () => {
    if (listjugadores[0].puntos > listjugadores[1].puntos) {
      return listjugadores[0];
    } else if (listjugadores[0].puntos < listjugadores[1].puntos) {
      return listjugadores[1];
    } else {
      return "Empate";
    }
  };

  const verGanador = (
    <div>
      <h2>El ganador de la partida es: {ganador().nombre}</h2>
      <p>Con {ganador().puntos} puntos</p>
    </div>
  );
  return <div className="ganador">{verGanador}</div>;
};

export default Ganador;
