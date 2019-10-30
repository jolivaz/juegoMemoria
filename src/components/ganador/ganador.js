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
      {
        ganador() === 'Empate' ?
        <div>
          <h2>Empate entre {listjugadores[0].nombre} y {listjugadores[1].nombre}</h2>
        </div>
        :
        <div>
          <h2>El ganador de la partida es: {ganador().nombre}</h2>
          <p>Con {ganador().puntos} puntos</p>
        </div>
      }

    </div>
  );
  return <div className="ganador">{verGanador}</div>;
};

export default Ganador;
