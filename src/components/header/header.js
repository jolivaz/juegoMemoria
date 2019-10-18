import React from "react";
import Logo from "../../images/logo.png";
import data from "./../../data.json";
import "./header.scss";

const Header = ({
  title,
  guardarCartas,
  listjugadores,
  guardarlistjugadores
}) => {
  const repartirCartas = listaCartas => {
    let nuevasCartas = listaCartas.sort(function(a, b) {
      return Math.random() - 0.5;
    });

    nuevasCartas = nuevasCartas.map(cartas => {
      cartas.estado = false;
      cartas.adivinada = false;
      return cartas;
    });

    let nuevoJugador = listjugadores;
    nuevoJugador[0].puntos = 0;
    nuevoJugador[1].puntos = 0;

    guardarCartas(nuevasCartas);
    guardarlistjugadores(nuevoJugador);
  };

  return (
    <header className="header-app">
      <img src={Logo} alt={Logo} />
      <div className="info">
        <h1>{title}</h1>
          <p>https://github.com/jolivaz</p>
      </div>
      <button onClick={() => repartirCartas(data.cartas)}>Repartir</button>
    </header>
  );
};

export default Header;
