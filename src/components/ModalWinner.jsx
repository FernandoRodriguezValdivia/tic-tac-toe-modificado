import { Square } from "./Square";

export const ModalWinner = ({ resetGame, winner }) => {
  return (
    <div className="modal-winner">
      <div className="modal-content">
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <h1>El ganador es:</h1> <Square square={{ mark: winner }} />
        </div>
        <button onClick={resetGame}>Reiniciar</button>
      </div>
    </div>
  );
};
