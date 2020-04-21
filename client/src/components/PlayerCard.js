import React from "react";

const PlayerCard = ({ name, country, searches, id }) => {
  return (
    <div className="player-container">
      <div className="player-wrapper">
        <div className="player-card">
          <h3 role="player-name" className="name">
            Name: {name}
          </h3>
          <h4 className="country">Country: {country}</h4>
          <p className="searches"># of Searches: {searches}</p>
        </div>
      </div>
    </div>
  );
};

export default PlayerCard;
