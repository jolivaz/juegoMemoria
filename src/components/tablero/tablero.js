import React, { useState, useEffect, Fragment } from "react";
import Carta from "../carta/carta";
import Ganador from "../ganador/ganador";
import "./tablero.scss";

const Tablero = ({
  cartas,
  guardarCartas,
  jugador1Activo,
  listjugadores,
  guardarlistjugadores,
  guardarJugador1Activo
}) => {
  const [adivinarCartas, guardarAdivinarCartas] = useState([]);
  const [listaAdivinadas, guardarListaAdivinadas] = useState([]);
  const [evaluandoCartas, guardarEvaluandoCartas] = useState(false);

  useEffect(() => {
    if (!evaluandoCartas && adivinarCartas.length === 1) {
      cambiarEstadoCarta();
    }

    if (adivinarCartas.length === 2) {
      setTimeout(() => {
        validarCartas(adivinarCartas);
        guardarAdivinarCartas([]);
        guardarEvaluandoCartas(false);
        guardarJugador1Activo(!jugador1Activo);
      }, 200);
    }
  });

  const cambiarEstadoCarta = () => {
    const newCartas = cartas.map(carta => {
      if (adivinarCartas[0].id === carta.id) {
        carta.estado = true;
      }
      return carta;
    });
    guardarEvaluandoCartas(true);
    guardarCartas(newCartas);
  };

  const validarCartas = compararCartas => {
    let newCartas = [];
    let adivinada = false;
    let comparar = false;
    compararCartas.map(carta => {
      if (listaAdivinadas.indexOf(carta.carta) === -1) {
        comparar = true;
      }
    });
    if (comparar) {
      if (compararCartas[0].carta === compararCartas[1].carta) {
        newCartas = cartas.map(carta => {
          if (carta.carta === compararCartas[0].carta) {
            carta.adivinada = true;
            adivinada = true;
          }
          return carta;
        });
      } else {
        newCartas = cartas.map(carta => {
          if (
            compararCartas[0].id === carta.id ||
            compararCartas[1].id === carta.id
          ) {
            carta.estado = false;
          }
          return carta;
        });
      }
      if (adivinada) {
        let newJugadoresPuntos = listjugadores;
        if (jugador1Activo) {
          newJugadoresPuntos[0].puntos++;
          guardarlistjugadores(newJugadoresPuntos);
        } else {
          newJugadoresPuntos[1].puntos++;
          guardarlistjugadores(newJugadoresPuntos);
        }
        guardarListaAdivinadas(compararCartas[0].carta);
      }
      guardarCartas(newCartas);
    }
  };

  let verCartas = cartas.map(baraja => {
    return (
      <Carta
        key={baraja.id}
        baraja={baraja}
        adivinarCartas={adivinarCartas}
        guardarAdivinarCartas={guardarAdivinarCartas}
      />
    );
  });

  return cartas.length > 0 ? (
    <div className="tablero">
      <Fragment>{verCartas}</Fragment>
      <Fragment>
        {listjugadores[0].puntos + listjugadores[1].puntos === 10 ? (
          <Ganador listjugadores={listjugadores} />
        ) : null}
      </Fragment>
    </div>
  ) : (
    <div>
      <h3>Presionar REPARTIR para iniciar Partida</h3>
    </div>
  );
};

export default Tablero;
