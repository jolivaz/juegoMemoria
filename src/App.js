import React, { useState } from "react";
import Header from "./components/header/header";
import Tablero from "./components/tablero/tablero";
import Jugadores from "./components/jugadores/jugadores";
import IconPlayers from "./components/icon-players/icon-players";
import "./App.css";

function App() {
  const [cartas, guardarCartas] = useState([]);
  const [jugador1Activo, guardarJugador1Activo] = useState(true);
  const [editandoJugadores, guardarEditandoJugadores] = useState(false);
  const [listjugadores, guardarlistjugadores] = useState([
    {
      id: 1,
      nombre: "Jugador 1",
      puntos: 0,
      activo: true,
      sexMan: true
    },
    {
      id: 2,
      nombre: "Jugador 2",
      puntos: 0,
      activo: false,
      sexMan: true
    }
  ]);

  return (
    <div className="App">
      <Header
        title="Juego de Memoria"
        guardarCartas={guardarCartas}
        listjugadores={listjugadores}
        guardarlistjugadores={guardarlistjugadores}
      />

      <Jugadores
        listjugadores={listjugadores}
        jugador1Activo={jugador1Activo}
        editandoJugadores={editandoJugadores}
        guardarlistjugadores={guardarlistjugadores}
        guardarEditandoJugadores={guardarEditandoJugadores}
      />

      <IconPlayers 
        listjugadores={listjugadores}
      />

      <Tablero
        cartas={cartas}
        listjugadores={listjugadores}
        guardarCartas={guardarCartas}
        jugador1Activo={jugador1Activo}
        guardarlistjugadores={guardarlistjugadores}
        guardarJugador1Activo={guardarJugador1Activo}
      />
    </div>
  );
}

export default App;
