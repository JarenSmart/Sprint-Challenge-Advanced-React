import React from "react";
import axios from "axios";

import PlayerCard from "./components/PlayerCard";
import ToggleDarkMode from "./hooks/toggleDarkMode";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      playerData: [],
    };
  }

  componentDidMount() {
    console.log("did mount");
    axios
      .get(`http://localhost:5000/api/players`)
      .then((response) => this.setState({ playerData: response.data }))
      .catch((error) => console.log("There was an error: ", error));
  }

  render() {
    return (
      <div className="App">
        <main>
          <ToggleDarkMode />
          <h1>Women's World Cup Top Players Searched</h1>
          <div data-testid="players-info">
            {this.state.playerData.map((player) => {
              return (
                <PlayerCard
                  key={player.id}
                  id={player.id}
                  name={player.name}
                  country={player.country}
                  searches={player.searches}
                />
              );
            })}
          </div>
        </main>
      </div>
    );
  }
}

export default App;
