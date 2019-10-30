import React from "react";
import p1f from '../../images/p1-f.png'
import p1m from '../../images/p1-m.png'
import p2f from '../../images/p2-f.png'
import p2m from '../../images/p2-m.png'
import "./icon-players.scss";

const IconPlayers = ({ listjugadores }) => {

  return (
    <div className="icon-players">
      {listjugadores[0].sexMan ? 
        <img 
          src={p1m} 
          alt="player" 
          className="img-icon-players-1" /> :
        <img 
          src={p1f} 
          alt="player" 
          className="img-icon-players-1" />
      }
      
      {listjugadores[1].sexMan ? 
        <img 
          src={p2m} 
          alt="player" 
          className="img-icon-players-2" /> :
        <img 
          src={p2f} 
          alt="player" 
          className="img-icon-players-2" />
      }
    </div>
  );
};

export default IconPlayers;
