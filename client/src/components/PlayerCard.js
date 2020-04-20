import React from "react";

const PlayerCard = ({ name, country, searches, id }) => {
  return (
    <div className="player-card">
      <h3 className="name">Name: {name}</h3>
      <h4 className="country">Country: {country}</h4>
      <p className="searches"># of Searches: {searches}</p>
    </div>
  );
};

//FOR APP.JS

// <PlayerCard
//   name={this.state.playerData.name}
//   country={this.state.playerData.country}
//   searches={this.state.playerData.searches}
// />;

export default PlayerCard;
