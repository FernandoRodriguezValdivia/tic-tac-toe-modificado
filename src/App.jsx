import { useState } from "react";
import "./App.css";
import { Game } from "./components/Game";
import { Instructions } from "./components/Instructions";

function App() {
  const [instructions, setInstructions] = useState(true);

  return (
    <div style={{ border: "1px solid white", minHeight: "80vh", padding: "0 48px" }}>
      <h1>Tic Tac Toe Super</h1>
      {instructions ? (
        <Instructions>
          <button onClick={() => setInstructions(false)}>Empezar Juego</button>
        </Instructions>
      ) : (
        <Game />
      )}
    </div>
  );
}

export default App;
